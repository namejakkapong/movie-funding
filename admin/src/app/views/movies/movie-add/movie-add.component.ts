import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  constructor(private movieService: MovieService, private modalService: NgbModal) { 

  }

  ngOnInit() {
  }

  onAddMovie(form: NgForm){
    this.movieService.store(form.value.name, form.value.name_eng, form.value.detail, form.value.description, form.value.total,form.value.status,form.value.image);
  }


}



