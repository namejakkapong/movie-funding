import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent implements OnInit {
  categories: any;
  
  constructor(private categoriesService: CategoriesService, private modalService: NgbModal) { }

  ngOnInit() {
    this.categoriesService.index()
  }

  onAddCategory(form :NgForm) {
     this.categoriesService.store(form.value.name, form.value.eng);
  }

  onEditCategory(form :NgForm) {
    // this.categoriesService.update(form.value.name, form.value.eng);
 }

 deleteCat(id){
  // console.log(1);
  this.categoriesService.destroy(id);
  
  }

  confirm(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true });
	  }

}
