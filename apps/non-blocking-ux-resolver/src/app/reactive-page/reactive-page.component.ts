import { Observable, switchMap } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'angular-cologne-reactive-page',
  templateUrl: './reactive-page.component.html',
  styleUrls: ['./reactive-page.component.scss'],
})
export class ReactivePageComponent {
  cards$: Observable<User[]>;
  placeHolderCards = new Array(15);

  constructor(
    private usersService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cards$ = this.activatedRoute.queryParams.pipe(
      switchMap((params) => this.usersService.getUsers(params))
    );
  }
}
