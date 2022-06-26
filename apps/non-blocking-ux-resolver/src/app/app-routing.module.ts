import { RouterModule, Routes } from '@angular/router';

import { ConfigResolver } from './services/config-resolver.service';
import { NgModule } from '@angular/core';
import { PostResolver } from './services/post-resolver.service';
import { ReactiveDetailPageComponent } from './reactive-page/detail-page/detail-page.component';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';
import { ResolverDetailPageComponent } from './resolver-page/detail-page/detail-page.component';
import { ResolverPageComponent } from './resolver-page/resolver-page.component';

const routes: Routes = [
  {
    path: 'resolve',
    resolve: {
      config: ConfigResolver,
    },
    children: [
      {
        path: '',
        component: ResolverPageComponent,
      },
      {
        path: ':id',
        component: ResolverDetailPageComponent,
        resolve: {
          item: PostResolver,
        },
      },
    ],
  },
  {
    path: 'reactive',
    children: [
      {
        path: '',
        component: ReactivePageComponent,
      },
      {
        path: ':id',
        component: ReactiveDetailPageComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
