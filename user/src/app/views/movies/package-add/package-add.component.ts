import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VerificationService } from 'src/app/services/verification.service';

@Component({
  selector: 'app-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss'],
  animations: [SharedAnimations]
})
export class PackageAddComponent implements OnInit {


  constructor(
    private modalService: NgbModal,
    private verificationService : VerificationService,

    ) { }

  ngOnInit() {
  }

  onAddpackage(form: NgForm) {
    // console.log(form.value);
    this.verificationService.storepackage(form.value.movie_id,form.value.type_package, form.value.topic,form.value.details, form.value.reward, form.value.amount, form.value.percent );
  }

  
}