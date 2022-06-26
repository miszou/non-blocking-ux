import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, finalize, map, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { TimerService } from '@angular-cologne/shared';

const API_URL = 'http://localhost:3000/api';
export interface Entity {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient, private timerService: TimerService) {}

  getPosts(params?: Params): Observable<Entity[]> {
    this.timerService.reset();
    this.timerService.start();
    params = new HttpParams(params).append('limit', 15);

    return this.http
      .get<{ users: Entity[] }>(`${API_URL}/users`, { params })
      .pipe(
        catchError((error) => throwError(() => error)),
        map((response) => response.users),
        finalize(() => this.timerService.pause())
      );
  }

  getPostById(id: string): Observable<Entity> {
    this.timerService.reset();
    this.timerService.start();

    return this.http.get<Entity>(`${API_URL}/users/${id}`).pipe(
      catchError((error) => throwError(() => error)),
      finalize(() => this.timerService.pause())
    );
  }

  private randomColor = () => {
    let color = '';
    for (let i = 0; i < 6; i++) {
      const random = Math.random();
      const bit = (random * 16) | 0;
      color += bit.toString(16);
    }
    return color;
  };
}
