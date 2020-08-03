import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { id } from '@swimlane/ngx-datatable/release/utils';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  }

  onAddMovie(form: NgForm){
    console.log(form.form.value);
  }


}



