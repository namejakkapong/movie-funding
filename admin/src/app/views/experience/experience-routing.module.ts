import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceListComponent } from './experience-list/experience-list/experience-list.component';
import { ExperienceAddComponent } from './experience-add/experience-add/experience-add.component';


const routes: Routes = [

  {
    path: 'experience',
    component: ExperienceListComponent
  },
  {
    path: 'experience/add',
    component: ExperienceAddComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
