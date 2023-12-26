import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrl: './ball.component.scss',
  imports: [NgClass],
  standalone: true,
})
export class BallComponent {
  @Input({ required: true }) value!: number;
  @Input() ballSize = 'ball';
}
