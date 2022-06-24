import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, catchError, finalize, map, throwError } from 'rxjs';

import { Card } from '../models/card.model';
import { Config } from '../models/config.model';
import { Injectable } from '@angular/core';
import { TimerService } from '@angular-cologne/shared';

const API_URL = 'https://jsonplaceholder.typicode.com';
interface User {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient, private timerService: TimerService) {}

  getConfig(params?: HttpParams): Observable<Config | HttpErrorResponse> {
    this.timerService.startCounting();
    params =
      params ?? new HttpParams().append('limit', 6).append('offset', 100);

    return this.http.get<User[]>(`${API_URL}/users`, { params }).pipe(
      catchError((error) => throwError(() => error)),
      map((response) => ({ items: this.mapToCards(response) })),
      finalize(() => this.timerService.stopCounting())
    );
  }

  private mapToCards(data: User[]): Card[] {
    return data.map((item) => ({
      title: item['name'],
      imageUrl: 'https://placekitten.com/300/200',
    }));
  }
}
