import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceListComponent } from './experience-list/experience-list/experience-list.component';
import { ExperienceAddComponent } from './experience-add/experience-add/experience-add.component';


@NgModule({
  declarations: [ExperienceListComponent, ExperienceAddComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ]
})
export class ExperienceModule { }
