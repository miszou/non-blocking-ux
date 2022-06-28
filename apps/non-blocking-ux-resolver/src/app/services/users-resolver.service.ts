import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UsersResolver implements Resolve<User[] | null> {
  constructor(private usersService: UserService) {}

  resolve(): Observable<User[]> {
    return this.usersService.getUsers();
  }
}
