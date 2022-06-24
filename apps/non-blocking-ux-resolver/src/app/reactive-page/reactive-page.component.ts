import { Observable, map } from 'rxjs';

import { Card } from '../models/card.model';
import { Component } from '@angular/core';
import { Config } from '../models/config.model';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'angular-cologne-reactive-page',
  templateUrl: './reactive-page.component.html',
  styleUrls: ['./reactive-page.component.scss'],
})
export class ReactivePageComponent {
  cards$: Observable<Card[]>;
  placeHolderCards = new Array(15);

  constructor(private configService: ConfigService) {
    this.cards$ = this.configService
      .getConfig()
      .pipe(map((config) => (config as Config)?.items ?? null));
  }
}
