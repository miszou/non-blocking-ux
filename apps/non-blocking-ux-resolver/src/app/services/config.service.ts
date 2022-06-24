import { Observable, of } from 'rxjs';

import { Config } from '../models/config.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  getConfig(): Observable<Config | null> {
    return of(null);
  }
}
