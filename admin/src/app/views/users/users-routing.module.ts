import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserViewComponent } from './user-view/user-view.component';
import { VerificationComponent } from './verification/verification.component';
import { VerificationAddComponent } from './verification-add/verification-add.component';
import { VerificationViewComponent } from './verification-view/verification-view.component';

const routes: Routes = [
  {
    path: 'creator&fundraiser',
    component: UserListComponent
  },
  {
    path: 'creator&fundraiser/:id',
    component: UserViewComponent
  },
  {
    path: 'create',
    component: UserAddComponent
  },
  {
    path: 'verification',
    component: VerificationComponent
  },
  {
    path: 'verification',
    component: VerificationComponent
  },
  {
    path: 'verification/id',
    component: VerificationViewComponent
  },
  {
    path: 'verification/add/id',
    component: VerificationAddComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
