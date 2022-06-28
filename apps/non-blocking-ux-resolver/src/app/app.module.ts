import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DelayInterceptor } from './services/delay.interceptor';
import { NgModule } from '@angular/core';
import { ReactiveDetailPageComponent } from './reactive-page/detail-page/detail-page.component';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';
import { ResolverDetailPageComponent } from './resolver-page/detail-page/detail-page.component';
import { ResolverPageComponent } from './resolver-page/resolver-page.component';
import { SharedModule } from '@angular-cologne/shared';
import { UsersResolver } from './services/users-resolver.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ResolverPageComponent,
    ReactivePageComponent,
    ResolverDetailPageComponent,
    ReactiveDetailPageComponent,
    WelcomePageComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, SharedModule],
  bootstrap: [AppComponent],
  providers: [
    UsersResolver,
    { provide: HTTP_INTERCEPTORS, useClass: DelayInterceptor, multi: true },
  ],
})
export class AppModule {}
