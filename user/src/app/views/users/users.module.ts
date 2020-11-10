import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';

import { UsersRoutingModule } from './users-routing.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserViewComponent } from './user-view/user-view.component';
import { VerificationComponent } from './verification/verification.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { VerificationAddComponent } from './verification-add/verification-add.component';
import { VerificationViewComponent } from './verification-view/verification-view.component';
// import { VerificationAddComponent } from './verification-add/verification-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    NgxDatatableModule,
    NgxPaginationModule,
    NgbModule,
    UsersRoutingModule,
  ],
  declarations: [
    UserListComponent,
    UserAddComponent, 
    UserViewComponent, 
    UserEditComponent, 
    VerificationComponent, 
    VerificationAddComponent, 
    VerificationViewComponent
  ],
})
export class UsersModule { }
