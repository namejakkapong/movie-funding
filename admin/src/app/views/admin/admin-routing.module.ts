import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminAddComponent } from './admin-add/admin-add.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,

  },
  {
    path: 'admin-list',
    component: AdminListComponent,
    
  },
  {
    path: 'admin-list/add',
    component: AdminAddComponent,
    
  },
  {
    path: 'admin-list/edit',
    component: AdminEditComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
