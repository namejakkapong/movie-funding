import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public movies: any;

  

  constructor(private modalService: NgbModal,private movieService: MovieService) {
		}

   ngOnInit() {
    this.movieService.index()
		.subscribe(response => {
      this.movies = response.data;
       console.log(this.movies);

		});
  }
}
