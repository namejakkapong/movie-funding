import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCategoryComponent } from './movie-category/movie-category.component';
import { MovieAddComponent } from './movie-add/movie-add.component';



@NgModule({
  declarations: [MovieListComponent, MovieCategoryComponent, MovieAddComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class MoviesModule { }
