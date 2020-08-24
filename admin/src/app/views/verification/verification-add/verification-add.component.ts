import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-verification-add',
  templateUrl: './verification-add.component.html',
  styleUrls: ['./verification-add.component.scss']
})
export class VerificationAddComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  view(color,size) {
    console.log(color +' '+ size);
  }

  onAddVerification(form: NgForm) {
    console.log(form.form.value);
  }

}
