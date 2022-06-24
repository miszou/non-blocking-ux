import { CardComponent } from './card/card.component';
import { CardSkeletonComponent } from './card-skeleton/card-skeleton.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CardComponent, HeaderComponent, CardSkeletonComponent],
  exports: [CardComponent, HeaderComponent, CardSkeletonComponent],
  providers: [TimerService],
})
export class SharedModule {}
