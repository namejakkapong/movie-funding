import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategorieService } from '../../../services/categorie.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent implements OnInit {
  confirmResut;
  public admins: any;

  constructor(private categorieService: CategorieService, private modalService: NgbModal) {
   }

  ngOnInit() {

  }

  onAddCategory(form :NgForm) {
    //  console.log(form.value);
this.categorieService.store(form.value.name, form.value.eng);
     form.reset();
  }

  onEditCategory(form :NgForm) {
    console.log(form.value);
 }

  confirm(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true });
    }
    

  deleteCat(id){
    // console.log(1);
    this.categorieService.destroy(id);
    
    }

  }
