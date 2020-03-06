import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurd } from './shared/services/auth.gaurd';
import { AdminLayoutSidebarLargeComponent } from './shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component';

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
  {
    path: 'movies',
    canActivate: [AuthGuard],
    loadChildren: () => import('./views/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'educations',
    loadChildren: () => import('./views/education/education.module').then(m => m.EducationModule)
  },
  {
    path: 'experiences',
    loadChildren: () => import('./views/experience/experience.module').then(m => m.ExperienceModule)
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
    component: AdminLayoutSidebarLargeComponent,
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
