import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieCategoryComponent } from './movie-category/movie-category.component';
import { MovieViewComponent } from './movie-view/movie-view.component';


const routes: Routes = [
  {
    path: 'all',
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
    path: 'detail',
    component: MovieViewComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
