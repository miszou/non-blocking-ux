import { Config } from '../models/config.model';
import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ConfigResolver implements Resolve<Config | null> {
  constructor(private configService: ConfigService) {}

  resolve(): Observable<Config | null> {
    return this.configService.getConfig();
  }
}
