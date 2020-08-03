import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserViewComponent } from './user-view/user-view.component';

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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
