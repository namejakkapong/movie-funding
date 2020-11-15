import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from 'src/app/services/categories.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-sendmoney-add',
  templateUrl: './sendmoney-add.component.html',
  styleUrls: ['./sendmoney-add.component.scss']
})
export class SendmoneyAddComponent implements OnInit {
  public movies: any;
  imagePreview: any;
  selectFile: any;
  imageCoverPreview: any;
  selectFileCover: any;

  constructor(
    private movieService: MovieService,
    private adminService: AdminService
  ) { }

  ngOnInit() {

    this.movieService.index()
        .subscribe(response => {
          this.movies = response.data;
           console.log(this.movies);
        });
  }

  onAddSend(form: NgForm) {
    // console.log(form.value);
    this.adminService.storesendmoneys(
      form.value.movie_id,
      form.value.topic,
      form.value.details,
      form.value.amount,
      form.value.sendmoney_date,
      this.selectFileCover
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
