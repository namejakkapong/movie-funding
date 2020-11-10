import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VerificationService } from 'src/app/services/verification.service';

@Component({
  selector: 'app-verification-view',
  templateUrl: './verification-view.component.html',
  styleUrls: ['./verification-view.component.scss']
})
export class VerificationViewComponent implements OnInit {
  public verifications: any;

  constructor(private modalService: NgbModal,private verificationService: VerificationService) {

   }

  ngOnInit() {
  
   this.verificationService.index()
  .subscribe(response => {
    this.verifications = response.data;
     console.log(this.verifications);

    });
   }
 }
