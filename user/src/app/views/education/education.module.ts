import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EducationRoutingModule } from './education-routing.module';
import { EducationListComponent } from './education-list/education-list.component';
import { EducationAddComponent } from './education-add/education-add.component';



@NgModule({
  declarations: [EducationListComponent, EducationAddComponent],
  imports: [
    CommonModule,
    EducationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  
  ]
})
export class EducationModule { }
