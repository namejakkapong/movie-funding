import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AccountComponent } from './account/account.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { SendmoneyAddComponent } from './sendmoney-add/sendmoney-add.component';
import { SendmoneyViewComponent } from './sendmoney-view/sendmoney-view.component';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    NgbModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [AccountComponent, AdminListComponent, AdminAddComponent, AdminEditComponent, AdminViewComponent, SendmoneyAddComponent, SendmoneyViewComponent, ]
})
export class AdminModule { }
