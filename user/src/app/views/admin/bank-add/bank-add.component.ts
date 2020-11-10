import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.scss']
})
export class BankAddComponent implements OnInit {
  public banks: any;

  constructor(
    private modalService: NgbModal,
    private adminService: AdminService

    ) { }

  ngOnInit() {
    this.adminService.bank()
    .subscribe(response => {
      this.banks = response;
      console.log(this.banks);
    });
	}

  onAddBank(form: NgForm) {
    console.log(form.value);

  }

}
