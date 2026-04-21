import { Component, input } from '@angular/core';
import { Frame } from '../_models/frame';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { HandleEmptyPipe } from '../_pipes/handle-empty-pipe';

@Component({
  selector: 'app-frame-result',
  imports: [
    MatCard, MatCardContent, HandleEmptyPipe,
  ],
  templateUrl: './frame-result.html',
  styleUrl: './frame-result.scss',
})
export class FrameResult {
  frame = input.required<Frame>();
  isActive = input(false);
}
