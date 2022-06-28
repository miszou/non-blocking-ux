import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'angular-cologne-resolver-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class ResolverDetailPageComponent {
  user: User | null = null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({ user }) => (this.user = user));
  }
}
