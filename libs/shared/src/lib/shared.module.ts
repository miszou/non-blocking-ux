import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, HeaderComponent],
  exports: [CardComponent, HeaderComponent],
})
export class SharedModule {}
