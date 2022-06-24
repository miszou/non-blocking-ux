import { ActivatedRoute } from '@angular/router';
import { Card } from '../models/card.model';
import { Component } from '@angular/core';
import { pluck } from 'rxjs';

@Component({
  selector: 'angular-cologne-resolver-page',
  templateUrl: './resolver-page.component.html',
  styleUrls: ['./resolver-page.component.scss'],
})
export class ResolverPageComponent {
  cards: Card[] = [];
  placeholderCards = new Array(15);

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data
      .pipe(pluck('config'))
      .subscribe((config) => (this.cards = config.items ?? null));
  }
}
