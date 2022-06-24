import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigResolver } from './services/config-resolver.service';
import { DelayInterceptor } from './services/delay.interceptor';
import { NgModule } from '@angular/core';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';
import { ResolverPageComponent } from './resolver-page/resolver-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@angular-cologne/shared';

@NgModule({
  declarations: [AppComponent, ResolverPageComponent, ReactivePageComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    ConfigResolver,
    { provide: HTTP_INTERCEPTORS, useClass: DelayInterceptor, multi: true },
  ],
})
export class AppModule {}
