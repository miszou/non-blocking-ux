import { Component } from '@angular/core';
import { GLOBAL_DELAY } from '../constants';
import { TimerService } from '../timer.service';
import { map } from 'rxjs';

@Component({
  selector: 'angular-cologne-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = `angular.cologne | Do's and Dont's for Non-Blocking UIs`;

  constructor(private timerService: TimerService) {}
  getProgress() {
    return this.timerService
      .selectTimer()
      .pipe(map((time) => (time / GLOBAL_DELAY) * 100));
  }
}
