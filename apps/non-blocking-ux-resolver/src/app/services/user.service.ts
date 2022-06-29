import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, finalize, map, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { TimerService } from '@angular-cologne/shared';
import { User } from '../models/user.model';

const API_URL = '/api';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private timerService: TimerService) {}

  getUsers(params?: Params): Observable<User[]> {
    this.timerService.reset();
    this.timerService.start();
    params = new HttpParams(params).append('limit', 15);

    return this.http
      .get<{ users: User[] }>(`${API_URL}/users`, { params })
      .pipe(
        catchError((error) => throwError(() => error)),
        map((response) => response.users),
        finalize(() => this.timerService.pause())
      );
  }

  getUserById(id: string): Observable<User> {
    this.timerService.reset();
    this.timerService.start();

    return this.http.get<User>(`${API_URL}/users/${id}`).pipe(
      catchError((error) => throwError(() => error)),
      finalize(() => this.timerService.pause())
    );
  }
}
