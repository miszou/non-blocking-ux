import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TimerService } from '@angular-cologne/shared';

@Component({
  selector: 'angular-cologne-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'non-blocking-ux-resolver';

  timer$: Observable<number>;

  constructor(private timerService: TimerService) {
    this.timer$ = this.timerService.selectTimer();
  }

  resetCounter() {
    this.timerService.reset();
  }
}
