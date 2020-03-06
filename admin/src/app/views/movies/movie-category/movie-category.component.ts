import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent implements OnInit {
  
  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }

  onAddCategory(form :NgForm) {
     console.log(form.value);
     form.reset();
  }

  onEditCategory(form :NgForm) {
    console.log(form.value);
 }

  confirm(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true });
	  }

}
