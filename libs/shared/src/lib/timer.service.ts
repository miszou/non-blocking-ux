import {
  Observable,
  Subject,
  animationFrameScheduler,
  interval,
  map,
  merge,
  scan,
  shareReplay,
  startWith,
  switchMap,
  takeUntil,
} from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private start$ = new Subject<void>();
  private stop$ = new Subject<void>();
  private reset$ = new Subject<void>();
  private stopWatch$: Observable<number>;
  private stopOrReset$ = merge(this.stop$, this.reset$);
  private paused$ = interval(10).pipe(takeUntil(this.stopOrReset$));
  private countOrReset$ = merge(
    this.paused$.pipe(map(() => (val: number) => val + 1)),
    this.reset$.pipe(map(() => () => this.initCount))
  );

  private initCount = 0;

  constructor() {
    this.stopWatch$ = this.start$.pipe(
      switchMap(() => this.countOrReset$),
      startWith(() => this.initCount),
      scan((acc, curr) => curr(acc), this.initCount),
      map((value) => value * 10),
      shareReplay()
    );
  }

  start() {
    this.start$.next();
  }

  pause() {
    this.stop$.next();
  }

  reset() {
    this.reset$.next();
  }

  selectTimer() {
    return this.stopWatch$;
  }
}
