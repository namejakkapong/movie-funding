import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurd } from './shared/services/auth.gaurd';
import { AdminLayoutSidebarCompactComponent } from './shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component';

import { LoginComponent } from './auth/login/login.component';
import { DashboadDefaultComponent } from './views/dashboard/dashboad-default/dashboad-default.component';
import { HomeComponent } from './views/home/home.component';

import { AuthGuard } from './auth/auth.guard';
const adminRoutes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)
  },
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/default',
    pathMatch: 'full'
  },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AdminLayoutSidebarCompactComponent,
    canActivate: [AuthGaurd],
    children: adminRoutes
  },
  {
    path: 'auth/login', component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'others/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
