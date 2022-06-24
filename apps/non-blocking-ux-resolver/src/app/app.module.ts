import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigResolver } from './services/config-resolver.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@angular-cologne/shared';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, RouterModule, SharedModule],
  bootstrap: [AppComponent],
  providers: [ConfigResolver],
})
export class AppModule {}
