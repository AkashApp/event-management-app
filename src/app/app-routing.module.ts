import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
  // {
  //   path: '',
  //   component: MainLayoutComponent, // 👈 protected area
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'events',
  //       loadChildren: () =>
  //         import('./events/events.module').then((m) => m.EventsModule),
  //     },
  //     { path: '', redirectTo: 'events', pathMatch: 'full' },
  //   ],
  // },
  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
