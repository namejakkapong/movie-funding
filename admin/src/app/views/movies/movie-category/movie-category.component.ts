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
  categories: any;
  

  
  constructor(private categorieService: CategorieService, private modalService: NgbModal) { }

  ngOnInit() {
    
     this.getCategorie();

  }

  getCategorie(){
    this.categorieService.index()
     .subscribe(response => {
       this.categories = response.data;
       console.log(this.categories);
     });
  }

  onAddCategory(form: NgForm ) {
    //  console.log(form.value);
     this.categorieService.store(form.value.name, form.value.eng);
     form.reset();
     this.getCategorie();
  }

  onEditCategory(form :NgForm , categorie_id: string) {
    this.categorieService.update(categorie_id, form.value.name, form.value.eng,)
    // console.log(categorie_id);
    this.getCategorie();
 }

  deleteCat(id){
    // console.log(1);
    this.categorieService.destroy(id);
    this.getCategorie();
    
    }

  confirm(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true });
	  }

}
