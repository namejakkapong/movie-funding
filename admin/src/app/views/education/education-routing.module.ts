import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationListComponent } from './education-list/education-list.component';
import { EducationAddComponent } from './education-add/education-add/education-add.component';


const routes: Routes = [
  {
    path: 'education-list/',
    component: EducationListComponent
  },
  {
    path: 'education-add/add',
    component: EducationAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
