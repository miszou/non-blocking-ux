import { ConfigService, Entity } from '../../services/config.service';
import { Observable, switchMap } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-cologne-reactive-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class ReactiveDetailPageComponent {
  post$: Observable<Entity> | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService
  ) {
    this.post$ = this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.configService.getPostById(id))
    );
  }
}
