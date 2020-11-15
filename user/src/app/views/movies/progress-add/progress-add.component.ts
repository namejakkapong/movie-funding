import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from 'src/app/services/categories.service';



@Component({
  selector: 'app-progress-add',
  templateUrl: './progress-add.component.html',
  styleUrls: ['./progress-add.component.scss']
})
export class ProgressAddComponent implements OnInit {
  imagePreview: any;
  selectFile: any;
  imageCoverPreview: any;
  selectFileCover: any;
  public movies: any;

  constructor(
    private modalService: NgbModal,
    private movieService: MovieService,
  ) { }

  ngOnInit() {

    this.movieService.index()
    .subscribe(response => {
      this.movies = response.data;
       console.log(this.movies);
    });

  }

  onAddProgress(form: NgForm) {
    // console.log(form.value);
    this.movieService.storeprogress(
      form.value.movie_id,
      form.value.topic,
      this.selectFileCover,
      form.value.detail,
      form.value.date,
      );

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
    // this.movieService.store(this.selectFileCover);
    console.log(this.selectFileCover);
  }

}
