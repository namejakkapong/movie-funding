import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperComponent, CropperSettings } from 'ngx-img-cropper';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {

  // image cropper
  data: any;
  cropperSettings: CropperSettings;

  constructor(private modalService: NgbModal) {
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
