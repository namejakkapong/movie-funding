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
<<<<<<< HEAD
import { VerificationComponent } from './verification/verification.component';
=======
import { UserEditComponent } from './user-edit/user-edit.component';
// import { VerificationAddComponent } from './verification-add/verification-add.component';



>>>>>>> 0722fb723aa51f5b42830577569cca49fab01d23

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
<<<<<<< HEAD
  declarations: [
    UserListComponent, 
    UserAddComponent, 
    UserViewComponent,
    VerificationComponent
  ]
=======
  declarations: [ UserListComponent, UserAddComponent, UserViewComponent, UserEditComponent]
>>>>>>> 0722fb723aa51f5b42830577569cca49fab01d23
})
export class UsersModule { }
