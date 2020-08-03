import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  
  private orderSub: Subscription;
  imagePreview: any;
  selectFile: any;
  imageCoverPreview: any;
  selectFileCover: any;

  constructor(private userService: UserService) {
   }

  ngOnInit() {
  }
  onAddUser(form: NgForm)
  {
      console.log(this.selectFileCover);
      this.userService.store(form.form.value.first_name +' '+ form.form.value.last_name, form.form.value.email, form.form.value.password, form.form.value.password_confirmation,this.selectFileCover);
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
