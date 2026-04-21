import { Component, computed, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Frame } from './_models/frame';
import { ResultBoard } from './result-board/result-board';
import { ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { RollForm } from './_forms/roll-form';
import { MatIconModule } from '@angular/material/icon';
import { createFrames } from './_utils/frame-utilts';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAX_FRAMES, MAX_PINS } from './_constants/game-constants';

@Component({
  selector: 'app-game',
  imports: [ResultBoard, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatButton, MatError, MatIconModule],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  readonly rollInput = viewChild<ElementRef<HTMLInputElement>>('rollInput');

  readonly rollForm = inject(RollForm);
  private readonly snackbar = inject(MatSnackBar);

  frames = createFrames(MAX_FRAMES);
  currentFrameIndex = signal(0);
  remainingPins = signal(MAX_PINS);

  isGameComplete = computed(() => {
    return this.frames[this.frames.length - 1]?.isRoundComplete() ?? false;
  });

  constructor() {
    effect(() => {
      if (this.isGameComplete()) {
        this.rollForm.rollControl.disable();
        this.snackbar.open('Game Complete!', '', { duration: 3000, panelClass: ['complete-section'], verticalPosition: 'top' });
      }
    })
  }

  roll() {
    const rollValue = this.rollForm.rollControl.value ?? 0;
    const currentFrame = this.frames[this.currentFrameIndex()];

    currentFrame.roll(rollValue);
    this.rollForm.rollControl.reset();

    if (currentFrame.isRoundComplete()) {
      this.currentFrameIndex.update(i => i + 1);
      this.remainingPins.set(MAX_PINS);
    } else {
      const isBonusRoll = currentFrame.isLastFrame() && (currentFrame.isSpare() || currentFrame.isStrike());
      this.remainingPins.set(isBonusRoll ? MAX_PINS : currentFrame.remainingPins());
    }

    this.rollInput()?.nativeElement.focus();
    this.syncValidators();
  }

  private syncValidators() {
    const validators = this.rollForm.getValidators(this.remainingPins());
    this.rollForm.rollControl.setValidators(validators);
    this.rollForm.rollControl.updateValueAndValidity();
  }
}
