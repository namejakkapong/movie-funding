import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { VerificationService } from 'src/app/services/verification.service';
import { Subscription } from 'rxjs';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  formBasic: FormGroup;
  loading: boolean;
  radioGroup: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private verificationService : VerificationService,
    private fb: FormBuilder,
    private toastr: ToastrService
    ) { }

    ngOnInit() {
      this.buildFormBasic();
      this.radioGroup = this.fb.group({
      radio: []
    });
    this.route.paramMap.subscribe((paraMap: ParamMap)=>{
      if(paraMap.has('id')){
        this.id = paraMap.get('id');
        console.log(this.id);
      }
    });

  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      experience: []
    });
  }

  submit(form: NgForm) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      console.log(form.value);
      //console.log(this.selectFileCover);
      //this.verificationService.store(this.id, form.value.type, form.value.card_number, form.value.status, form.value.address);
      //this.selectFileCover,
      this.toastr.success('บันทึกข้อมูลเรียบร้อยแล้ว.', 'สำเร็จ!', {progressBar: true});
    }, 500);
  }

  // onAddVerification(form: NgForm) {
  //   console.log(form.value);

  //   console.log(this.selectFileCover);
  //   this.verificationService.store(form.value.type, form.value.card_number, form.value.card_pic, form.value.status, form.value.address, this.id);
  // }

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
