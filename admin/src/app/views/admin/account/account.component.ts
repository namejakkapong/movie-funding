import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperComponent, CropperSettings } from 'ngx-img-cropper';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  // auth
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  public getAuthUser: any;
  private nameSub: Subscription;

  // image cropper
  data: any;
  cropperSettings: CropperSettings;

  constructor(private authService: AuthService, private modalService: NgbModal) {
        this.cropperSettings = new CropperSettings();
        // this.cropperSettings.width = 100;
        // this.cropperSettings.height = 100;
        // this.cropperSettings.croppedWidth = 100;
        // this.cropperSettings.croppedHeight = 100;
        // this.cropperSettings.canvasWidth = 400;
        // this.cropperSettings.canvasHeight = 300;
        this.cropperSettings.cropperDrawSettings.lineDash = true;
        this.cropperSettings.cropperDrawSettings.dragIconStrokeWidth = 0;

        this.data = {};
   }

  ngOnInit() {
    // auth
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListerner()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
    });
    console.log(this.userIsAuthenticated);
    this.getAuthUser = this.authService.getAuthName();
      this.nameSub = this.authService.getAuthDataUpdateListener()
        .subscribe(response => {
          console.log('test : ', response);
          this.getAuthUser = response;
    });

  }

  open(modal) {
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title' })
    .result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log('Err!', reason);
    });
  }

}
