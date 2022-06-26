import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Entity } from '../services/config.service';
import { pluck } from 'rxjs';

@Component({
  selector: 'angular-cologne-resolver-page',
  templateUrl: './resolver-page.component.html',
  styleUrls: ['./resolver-page.component.scss'],
})
export class ResolverPageComponent {
  cards: Entity[] = [];
  placeholderCards = new Array(15);

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data
      .pipe(pluck('config'))
      .subscribe((config) => (this.cards = config ?? null));
  }
}
