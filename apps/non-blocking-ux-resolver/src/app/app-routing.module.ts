import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConfigResolver } from './services/config-resolver.service';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
    resolve: {
      config: ConfigResolver,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
