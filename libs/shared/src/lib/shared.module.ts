import { CardComponent } from './card/card.component';
import { CardSkeletonComponent } from './card-skeleton/card-skeleton.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';
import { StopWatchComponent } from './stop-watch/stop-watch.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CardComponent, HeaderComponent, CardSkeletonComponent, StopWatchComponent],
  exports: [CardComponent, HeaderComponent, CardSkeletonComponent, StopWatchComponent],
  providers: [TimerService],
})
export class SharedModule {}
