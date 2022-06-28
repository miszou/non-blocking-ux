import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<User> {
  constructor(private usersService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.usersService.getUserById(route.params['id']);
  }
}
