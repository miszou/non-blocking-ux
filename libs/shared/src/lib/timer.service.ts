import {
  BehaviorSubject,
  NEVER,
  Observable,
  animationFrameScheduler,
  interval,
  map,
  merge,
  of,
  scan,
  switchMap,
  tap,
} from 'rxjs';

import { Injectable } from '@angular/core';
import { animation } from '@angular/animations';

interface State {
  counting: boolean;
  value: number;
}

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private readonly counting$ = new BehaviorSubject<boolean>(false);
  private readonly count$ = new BehaviorSubject<number>(0);
  private readonly currentCount$ = new BehaviorSubject<number>(0);

  private readonly events$ = merge(
    this.counting$.pipe(map((counting) => ({ counting }))),
    this.count$.pipe(map((value) => ({ value })))
  );

  stopWatch$ = this.events$.pipe(
    scan((state: State, curr): State => ({ ...state, ...curr }), {} as State),
    switchMap((state: State) =>
      state.counting
        ? interval(1, animationFrameScheduler).pipe(
            tap(() => (state.value = state.value + 1))
          )
        : NEVER
    )
  );

  startCounting() {
    this.counting$.next(true);
  }

  stopCounting() {
    this.counting$.next(false);
  }

  selectTimer(): Observable<number> {
    return this.stopWatch$;
  }

  clear() {
    this.counting$.next(false);
    this.count$.next(0);
  }
}
