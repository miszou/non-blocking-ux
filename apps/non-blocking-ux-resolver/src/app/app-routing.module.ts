import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ReactiveDetailPageComponent } from './reactive-page/detail-page/detail-page.component';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';
import { ResolverDetailPageComponent } from './resolver-page/detail-page/detail-page.component';
import { ResolverPageComponent } from './resolver-page/resolver-page.component';
import { UserResolver } from './services/user-resolver.service';
import { UsersResolver } from './services/users-resolver.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'resolve',
    resolve: {
      users: UsersResolver,
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
          user: UserResolver,
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
