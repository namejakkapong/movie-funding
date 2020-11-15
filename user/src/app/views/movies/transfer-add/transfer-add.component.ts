import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-transfer-add',
  templateUrl: './transfer-add.component.html',
  styleUrls: ['./transfer-add.component.scss'],
  animations: [SharedAnimations]
})
export class TransferAddComponent implements OnInit {
  public movie: any;
  public user: any;
  public users: any;
  private id: string;
  private user_id: string;
  private package_id: string;
  public packages: any;
  public banks: any;
  imagePreview: any;
  selectFile: any;
  imageCoverPreview: any;
  selectFileCover: any;


  constructor(
    private modalService: NgbModal,
    private router: Router,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paraMap: ParamMap)=>{
      if(paraMap.has('id')){
        this.id = paraMap.get('id');
        this.package_id = paraMap.get('package_id');
        console.log(this.id);
        console.log(this.package_id);

        this.movieService.show(this.id)
        .subscribe(response => {
          this.movie = response;
          console.log(this.movie);
        });

        this.movieService.indexpackageall(this.id, this.package_id)
        .subscribe(response => {
          this.packages = response;
          console.log(this.packages);
        });
        this.getBank();
        this.getUser();
      }

    });

  }

  addtrans(form: NgForm){
    // console.log(form.value);
    this.movieService.addtrans(
      this.id,
      this.package_id,
      form.value.user_id,
      form.value.bank_id,
      form.value.transfer_amount,
      form.value.transfer_date,
      this.selectFileCover,
      form.value.status
      );
}

  getBank(){
    this.adminService.bank()
        .subscribe(response => {
          this.banks = response;
          console.log(this.banks);
        });
  }

  getUser(){
    this.userService.index2()
        .subscribe(response => {
          this.users = response;
          console.log(this.users);
        });
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


