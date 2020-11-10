import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {
  imagePreview: any;
  selectFile: any;
  imageCoverPreview: any;
  selectFileCover: any;
  categories: any;

  constructor(
    private movieService: MovieService,
    private modalService: NgbModal,
    private categoriesService: CategoriesService

    ) { }

  ngOnInit() {
    this.categoriesService.index()
    .subscribe(response => {
      this.categories = response.data;
       console.log(this.categories);

		});
  }


  onAddMovie(form: NgForm){
    // console.log(form.value);
    //console.log(this.selectFileCover);
    this.movieService.store(
      form.value.category_id,
      form.value.name_en,
      //this.selectFileCover,
      form.value.name_th,
      form.value.description,
      form.value.resume,
      form.value.director,
      form.value.total,
      form.value.status,
      form.value.screening_date,
      form.value.start_date,
      form.value.end_date);

  }


  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      this.selectFile = reader.result;
    };
    reader.readAsDataURL(file);
  }
  onUploadImageProfile() {
    // this.profileService.uploadImageProfile(this.selectFile);
  }
  onCancelImagProfile() {
    this.imagePreview = undefined;
    this.selectFile = '';
  }
  onImageCover(event: Event)
  {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageCoverPreview = reader.result;
      this.selectFileCover = reader.result;
    };
    reader.readAsDataURL(file);
  }
  onUploadImageCover() {
    // this.profileService.uploadImageCover(this.selectFileCover);
    console.log(this.selectFileCover);
  }


}



