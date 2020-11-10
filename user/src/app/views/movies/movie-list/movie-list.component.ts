import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from 'src/app/services/movie.service';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  animations: [SharedAnimations]
})
export class MovieListComponent implements OnInit {
  public movies: any;
  viewMode: 'list' | 'grid' = 'list';
  allSelected: boolean;
  page = 1;
  pageSize = 8;
  products: any[] = [];
  categories: any;
  confirmResut;


  constructor(
    private modalService: NgbModal,
    private movieService: MovieService,
    private dl: DataLayerService,
    private categoriesService: CategoriesService,
    private router: Router

    ) { }

    ngOnInit() {
      this.movieService.index()
        .subscribe(response => {
          this.movies = response.data;
          console.log(this.movies);
        });
    }

    open(content) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        console.log(result);
      }, (reason) => {
        console.log('Err!', reason);
      });
    }
    confirm(content) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
      .result.then((result) => {
        this.confirmResut = `Closed with: ${result}`;
      }, (reason) => {
        this.confirmResut = `Dismissed with: ${reason}`;
      });

    }
    getAdmins() {
      this.movieService.index()
      .subscribe(response => {
        this.movies = [...response.data];
      });
    }

  // viewMovie(id) {
  //   console.log(id);
  //   this.router.navigate(['movies/view/' + id]);
  // }

  viewMovieNew(id) {
    console.log(id);
    this.router.navigate(['/movies/movienew/' + id]);
    //this.router.navigate(['/movies/movienew/']);

  }
  viewMovieAdd(id) {
    console.log(id);
    this.router.navigate(['/movies/movie-add']);
  }


  // selectAll(e) {
  //   this.products = this.products.map(p => {
  //     p.isSelected = this.allSelected;
  //     return p;
  //   });

  //   if (this.allSelected) {

  //   }
  //   console.log(this.allSelected);
  // }
}
