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
  public categories: any;
  private id: string;

  constructor(private categoriesService: CategoriesService, private modalService: NgbModal) { }

  ngOnInit() {
    this.categoriesService.index()
    .subscribe(response => {
      this.categories = response.data;
       console.log(this.categories);

		});
  }

  onAddCategory(form :NgForm) {
     this.categoriesService.store(form.value.name, form.value.eng);
  }

  onEditCategory(form :NgForm, category_id: string) {
    //console.log(form.value);
    this.categoriesService.update(category_id, form.value.name, form.value.eng);
 }

 deleteCat(id){
  // console.log(1);
  this.categoriesService.destroy(id);

  }

  confirm(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true });
    }



  }
