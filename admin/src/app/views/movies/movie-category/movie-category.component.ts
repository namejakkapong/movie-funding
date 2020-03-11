import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent implements OnInit {
  
  constructor(private categorieService: CategorieService, private modalService: NgbModal) { }

  ngOnInit() {
    this.categorieService.index()
  }

  onAddCategory(form :NgForm) {
     this.categorieService.store(form.value.name, form.value.eng);
  }

  onEditCategory(form :NgForm) {
    this.categorieService.update(form.value.name, form.value.eng);
 }

 deleteCat(id){
  // console.log(1);
  this.categorieService.destroy(id);
  
  }

  confirm(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true });
	  }

}
