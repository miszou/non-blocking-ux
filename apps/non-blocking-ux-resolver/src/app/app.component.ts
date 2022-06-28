import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

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
  loading = false;
  showStopWatch = false;

  constructor(private timerService: TimerService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
    this.timer$ = this.timerService.selectTimer();
  }

  resetCounter() {
    this.timerService.reset();
  }
}
