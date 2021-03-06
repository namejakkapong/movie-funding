import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { SendmoneyAddComponent } from './sendmoney-add/sendmoney-add.component';
import { SendmoneyViewComponent } from './sendmoney-view/sendmoney-view.component';

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
  {
    path: 'admin-view',
    component: AdminViewComponent,
    
  },
  {
    path: 'sendmoney-add',
    component: SendmoneyAddComponent,
    
  },
  {
    path: 'sendmoney-view',
    component: SendmoneyViewComponent,
    
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
