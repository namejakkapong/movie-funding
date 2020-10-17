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
import { MovieViewComponent } from './movie-view/movie-view.component';
import { MovienewComponent } from './movienew/movienew.component';
import { ProgressViewComponent } from './progress-view/progress-view.component';
import { PackageAddComponent } from './package-add/package-add.component';
import { PackageViewComponent } from './package-view/package-view.component';
import { TransferAddComponent } from './transfer-add/transfer-add.component';
import { TransferViewComponent } from './transfer-view/transfer-view.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';



@NgModule({
  declarations: [MovieListComponent, MovieCategoryComponent, MovieAddComponent,MovieViewComponent , MovienewComponent, ProgressViewComponent, PackageAddComponent, PackageViewComponent, TransferAddComponent, TransferViewComponent, TransferListComponent],
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
