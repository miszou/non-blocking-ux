import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TimerService } from '../timer.service';

interface Config {
  showStart?: boolean;
  showPause?: boolean;
  showReset?: boolean;
}

@Component({
  selector: 'angular-cologne-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss']
})
export class StopWatchComponent {
  @Input() config: Config = {
    showStart: false,
    showPause: false,
    showReset: false,
  };

  stopWatch$: Observable<number>;

  constructor(private timerService: TimerService) {
    this.stopWatch$ = this.timerService.selectTimer();
  }

  start() {
    this.timerService.start();
  }

  pause() {
    this.timerService.pause();
  }

  reset() {
    this.timerService.reset();
  }
}
