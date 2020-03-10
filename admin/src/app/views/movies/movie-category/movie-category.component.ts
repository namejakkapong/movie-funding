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
  
  constructor(private categorieSevice: CategorieService, private modalService: NgbModal) { }

  ngOnInit() {

  }

  onAddCategory(form :NgForm) {
     this.categorieSevice.store(form.value.name, form.value.eng);
  }

  onEditCategory(form :NgForm) {
    this.categorieSevice.update(form.value.name, form.value.eng);
 }

 deleteCat(id){
  // console.log(1);
  this.categorieSevice.destroy(id);
  
  }

  confirm(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true });
	  }

}
