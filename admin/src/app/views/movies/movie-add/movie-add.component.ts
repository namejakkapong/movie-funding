import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  constructor(private MovieService: MovieService) { 

  }

  ngOnInit() {

  }

  onAddMovie(form: NgForm){
    console.log(form.form.value);
    this.MovieService.store(form.form.value.category_id, form.form.value.name, form.form.value.name_end, form.form.value.details, form.form.value.description, form.form.value.total, form.form.value.status, form.form.value.start, form.form.value.end );
  }


}



