import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-verification-add',
  templateUrl: './verification-add.component.html',
  styleUrls: ['./verification-add.component.scss']
})
export class VerificationAddComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  radioGroup: FormGroup;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService
    ) { }

  ngOnInit() {this.buildFormBasic();
    this.radioGroup = this.fb.group({
      radio: []
    });
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      experience: []
    });
  }

  view(color,size) {
    console.log(color +' '+ size);
  }

  onAddVerification(form: NgForm) {
    console.log(form.form.value);
  }

}
