import { Component, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle
  ]
})
export class App {
  protected readonly title = signal('bowling-game');
}
