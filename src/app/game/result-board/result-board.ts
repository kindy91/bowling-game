import { Component, input } from '@angular/core';
import { Frame } from '../_models/frame';
import { FrameResult } from '../frame-result/frame-result';

@Component({
  selector: 'app-result-board',
  imports: [FrameResult],
  templateUrl: './result-board.html',
  styleUrl: './result-board.scss',
})
export class ResultBoard {
  frames = input.required<Frame[]>();
  activeFrameIndex = input<number| undefined>();
}
