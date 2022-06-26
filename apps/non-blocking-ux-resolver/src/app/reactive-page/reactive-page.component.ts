import { ConfigService, Entity } from '../services/config.service';
import { Observable, switchMap } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-cologne-reactive-page',
  templateUrl: './reactive-page.component.html',
  styleUrls: ['./reactive-page.component.scss'],
})
export class ReactivePageComponent {
  cards$: Observable<Entity[]>;
  placeHolderCards = new Array(15);

  constructor(
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cards$ = this.activatedRoute.queryParams.pipe(
      switchMap((params) => this.configService.getPosts(params))
    );
  }
}
