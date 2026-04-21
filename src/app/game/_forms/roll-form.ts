import { Injectable } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { MAX_PINS } from '../_constants/game-constants';

@Injectable({
  providedIn: 'root',
})
export class RollForm {
    rollControl = new FormControl<number | undefined>(undefined, this.getValidators(MAX_PINS));

    getValidators(maxPins: number): ValidatorFn[]  {
        return [Validators.required, Validators.min(0), Validators.max(maxPins)];
    }
}
