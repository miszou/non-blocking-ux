import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, delay } from 'rxjs';

import { Injectable } from '@angular/core';

const DELAY = 2000;

@Injectable()
export class DelayInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(delay(DELAY));
  }
}
