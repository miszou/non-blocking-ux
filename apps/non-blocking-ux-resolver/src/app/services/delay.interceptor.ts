import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, delay } from 'rxjs';

import { GLOBAL_DELAY } from '@angular-cologne/shared';
import { Injectable } from '@angular/core';

@Injectable()
export class DelayInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(delay(GLOBAL_DELAY));
  }
}
