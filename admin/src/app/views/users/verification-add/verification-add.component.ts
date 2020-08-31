import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { VerificationService } from 'src/app/services/verification.service';
import { Subscription } from 'rxjs';
<<<<<<< HEAD
=======

>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4
@Component({
  selector: 'app-verification-add',
  templateUrl: './verification-add.component.html',
  styleUrls: ['./verification-add.component.scss']
})
export class VerificationAddComponent implements OnInit {
  private id: string;
  private orderSub: Subscription;
  imagePreview: any;
  selectFile: any;
  imageCoverPreview: any;
  selectFileCover: any;
<<<<<<< HEAD
=======

>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private verificationService : VerificationService
    ) { }
<<<<<<< HEAD
=======

>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4
  ngOnInit() {
    this.route.paramMap.subscribe((paraMap: ParamMap)=>{
      if(paraMap.has('id')){
        this.id = paraMap.get('id');
        console.log(this.id);
      }
    });
<<<<<<< HEAD
=======

  }

  onAddVerification(form: NgForm) {
    console.log(form.value);

    console.log(this.selectFileCover);
    // this.verificationService.store(this.id, form.value.status, form.value.card_number, form.value.card_pic, form.value.tel, form.value.address);
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
>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4
  }
  onAddVerification(form: NgForm) {
    console.log(form.value);
    console.log(this.selectFileCover);
    // this.verificationService.store(this.id, form.value.status, form.value.card_number, form.value.card_pic, form.value.tel, form.value.address);
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