import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { CategorieService } from '../../../services/categorie.service'
import { from } from 'rxjs';
=======
import { CategoriesService } from 'src/app/services/categories.service';
>>>>>>> de034fb6bff5a8bc489075e68690cd86f4f4cfc8

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent implements OnInit {
<<<<<<< HEAD
  confirmResut;
  public admins: any;

  constructor(private categorieService: CategorieService, private modalService: NgbModal) {
   }
=======
  categories: any;
  
  constructor(private categoriesService: CategoriesService, private modalService: NgbModal) { }
>>>>>>> de034fb6bff5a8bc489075e68690cd86f4f4cfc8

  ngOnInit() {
    this.categoriesService.index()
  }

  onAddCategory(form :NgForm) {
<<<<<<< HEAD
    //  console.log(form.value);
this.categorieService.store(form.value.name, form.value.eng);
     form.reset();
=======
     this.categoriesService.store(form.value.name, form.value.eng);
>>>>>>> de034fb6bff5a8bc489075e68690cd86f4f4cfc8
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
    

  deleteCat(id){
    // console.log(1);
    this.categorieService.destroy(id);
    
    }

  }
