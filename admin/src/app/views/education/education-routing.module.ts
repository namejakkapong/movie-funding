import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationAddComponent } from './education-add/education-add.component';

const routes: Routes = [
  {
    path: 'add/:id',
    component: EducationAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
