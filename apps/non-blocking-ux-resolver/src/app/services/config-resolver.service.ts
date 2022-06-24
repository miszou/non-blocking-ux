import { Observable, catchError, of, tap } from 'rxjs';

import { Config } from '../models/config.model';
import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ConfigResolver implements Resolve<Config | null> {
  constructor(private configService: ConfigService) {}

  resolve(): Observable<any> {
    return this.configService
      .getConfig()
      .pipe(catchError((error) => of('No data')));
  }
}
