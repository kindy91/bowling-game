import { signal, computed } from '@angular/core';
import { MAX_PINS } from '../_constants/game-constants';

export class Frame {
    nextFrame = signal<Frame | undefined>(undefined);
    previousFrame = signal<Frame | undefined>(undefined);
    previousScore = computed<number>(() => {
        const previousFrame = this.previousFrame();

        return previousFrame?.score() ?? 0;
    });
    isLastFrame = computed(() => this.nextFrame() === undefined);

    firstRoll = signal<number | undefined>(undefined);
    secondRoll = signal<number | undefined>(undefined);
    thridRoll = signal<number | undefined>(undefined);

    score = computed(() => {
        const firstRoll = this.firstRoll();
        const secondRoll = this.secondRoll();
        const thirdRoll = this.thridRoll();

        const previousScore: number = this.previousScore() ?? 0;

        const isSpare = this.isSpare();
        const isStrike = this.isStrike();
        const isLastFrame = this.isLastFrame();

        const nextFrameFirstRoll = this.nextFrame()?.firstRoll() ?? 0;
        const nextFrameSecondRoll = this.nextFrame()?.secondRoll() ?? 0;

        let roundScore = undefined;

        if (firstRoll || firstRoll === 0) {
            roundScore = firstRoll;
        }

        if (roundScore === undefined) {
            return undefined;
        }

        if (secondRoll || secondRoll === 0) {
            roundScore += secondRoll;
        }

        if (isSpare) {
            roundScore += nextFrameFirstRoll;
        }

        if (isStrike) {
            roundScore += nextFrameFirstRoll + nextFrameSecondRoll;
        }

        if (isLastFrame && thirdRoll !== undefined) {
            roundScore += thirdRoll;
        }

        return previousScore + roundScore;

    })

    isStrike = computed(() => this.firstRoll() === MAX_PINS);
    isSpare = computed(() => this.firstRoll() !== MAX_PINS && (this.firstRoll() ?? 0) + (this.secondRoll() ?? 0) === MAX_PINS);

    remainingPins = computed(() => {
        if (this.isStrike()) {
            return 0;
        }

        const firstRoll = this.firstRoll() ?? 0;

        return MAX_PINS - firstRoll;
    });

    isRoundComplete = computed(() => {
        const firstRoll = this.firstRoll();
        const secondRoll = this.secondRoll();
        const thirdRoll = this.thridRoll();

        if (this.isLastFrame()) {
            if (this.isStrike() || this.isSpare()) {
                return thirdRoll !== undefined;
            }
            return firstRoll !== undefined && secondRoll !== undefined;
        }

        return this.isStrike() || (firstRoll !== undefined && secondRoll !== undefined);
    });

    roll(pins: number): void {
        if (this.isLastFrame() && (this.isStrike() || this.isSpare())) {
            this.thridRoll.set(pins);
        } else {
            if (this.firstRoll() === undefined) {
                this.firstRoll.set(pins);
            } else if (this.secondRoll() === undefined) {
                this.secondRoll.set(pins);
            }
        }
    }
}