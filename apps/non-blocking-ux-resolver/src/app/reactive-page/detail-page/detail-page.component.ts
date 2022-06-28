import { Observable, switchMap } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'angular-cologne-reactive-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class ReactiveDetailPageComponent {
  user$: Observable<User> | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UserService
  ) {
    this.user$ = this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    );
  }
}
