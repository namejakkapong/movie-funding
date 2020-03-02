import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceAddComponent } from './experience-add/experience-add/experience-add.component';

const routes: Routes = [
  {
    path: 'add/:id',
    component: ExperienceAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }