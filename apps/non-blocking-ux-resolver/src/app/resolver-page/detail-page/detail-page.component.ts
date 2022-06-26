import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Entity } from '../../services/config.service';
import { pluck } from 'rxjs';

@Component({
  selector: 'angular-cologne-resolver-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class ResolverDetailPageComponent {
  item: Entity | null = null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data
      .pipe(pluck('item'))
      .subscribe((item) => (this.item = item));
  }
}
