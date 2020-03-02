import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceAddComponent } from './experience-add/experience-add.component';


@NgModule({
  declarations: [ExperienceAddComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExperienceModule { }
