import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, map, pluck } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Card } from './models/card.model';

@Component({
  selector: 'angular-cologne-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'non-blocking-ux-resolver';
  cards$: Observable<Card[]> = EMPTY;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.cards$ = this.activatedRoute.data.pipe(
      pluck('config'),
      map((config) => config?.items)
    );
  }
}
