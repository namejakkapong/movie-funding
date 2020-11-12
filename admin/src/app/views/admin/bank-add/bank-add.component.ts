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
  private id: string;

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
    this.adminService.bankstore(form.form.value.account_name, form.form.value.account_number, form.form.value.bank_account);

  }

  onEditBank(form: NgForm, bank_id: string) {
    // console.log(bank_id);
    this.adminService.bankupdate(bank_id, form.value.account_name, form.value.account_number, form.value.bank_account);
    this.modalService.dismissAll();
 }

 deleteBank(id) {
  // console.log(id);
  this.adminService.bankdestroy(id);


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
