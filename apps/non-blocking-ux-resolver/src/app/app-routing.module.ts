import { RouterModule, Routes } from '@angular/router';

import { ConfigResolver } from './services/config-resolver.service';
import { NgModule } from '@angular/core';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';
import { ResolverPageComponent } from './resolver-page/resolver-page.component';

const routes: Routes = [
  {
    path: 'resolve',
    component: ResolverPageComponent,
    resolve: {
      config: ConfigResolver,
    },
  },
  {
    path: 'reactive',
    component: ReactivePageComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
