import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { bingoActionGroup } from './store/bingo.actions';
import {
  selectAvailableValuesLength,
  selectCurrentValue,
  selectPulledValues,
  selectShowResetButton,
} from './store';
import { BallComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, BallComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private store = inject(Store);

  title = 'bingo-runner';

  remainingValues$ = this.store.select(selectAvailableValuesLength);
  pulledValues$ = this.store.select(selectPulledValues);
  currentValue$ = this.store.select(selectCurrentValue);
  showResetButton$ = this.store.select(selectShowResetButton);

  ngOnInit(): void {
    const restoredState = localStorage.getItem('bingo-state');
    if (restoredState) {
      this.store.dispatch(
        bingoActionGroup.restoreState({ state: JSON.parse(restoredState) })
      );
    } else {
      this.store.dispatch(bingoActionGroup.resetState());
    }
    // as speech synthesis voices load on first call, we call it on app load
    // so that when we call for number changes, we have the voices
    window.speechSynthesis.getVoices();
  }

  pullBall(): void {
    this.store.dispatch(bingoActionGroup.getNewCurrentValue());
  }

  resetGame(): void {
    this.store.dispatch(bingoActionGroup.resetState());
  }
}
