import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';

import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<any> {
  constructor(private configService: ConfigService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.configService
      .getPostById(route.params['id'])
      .pipe(catchError((error) => of('No data')));
  }
}
