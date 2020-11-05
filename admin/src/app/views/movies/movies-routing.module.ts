import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieCategoryComponent } from './movie-category/movie-category.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { MovienewComponent } from './movienew/movienew.component';
import { ProgressViewComponent } from './progress-view/progress-view.component';
import { PackageAddComponent } from './package-add/package-add.component';
import { PackageViewComponent } from './package-view/package-view.component';
import { TransferAddComponent } from './transfer-add/transfer-add.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { TransferViewComponent } from './transfer-view/transfer-view.component';
import { BankAddComponent } from '../admin/bank-add/bank-add.component';
import { ProgressAddComponent } from './progress-add/progress-add.component';


const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'movie-add',
    component: MovieAddComponent
  },
  {
    path: 'movie-category',
    component: MovieCategoryComponent
  },
  {
    path: 'view/:id',
    component: MovieViewComponent
  },
  {
    path: 'movienew/:id',
    component: MovienewComponent
  },
  {
    path: 'progress-view',
    component: ProgressViewComponent
  },
  {
    path: 'package-add',
    component: PackageAddComponent
  },
  {
    path: 'package-view',
    component: PackageViewComponent
  },
  {
    path: 'transfer-add',
    component: TransferAddComponent
  },
  {
    path: 'transfer-list',
    component: TransferListComponent
  },
  {
    path: 'transfer-view',
    component: TransferViewComponent
  },
  {
    path: 'bank-add',
    component: BankAddComponent
  },
  {
    path: 'bank-add',
    component: BankAddComponent,

  },
  {
    path: 'progress-add',
    component: ProgressAddComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
