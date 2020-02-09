import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  confirmResut;
  public admins: any;

  constructor(private modalService: NgbModal, private adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.index()
      .subscribe(response => {
        this.admins = response.data;
        console.log(this.admins);
      });
  }
  
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
    .result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log('Err!', reason);
    });
  }
  confirm(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
    .result.then((result) => {
      this.confirmResut = `Closed with: ${result}`;
    }, (reason) => {
      this.confirmResut = `Dismissed with: ${reason}`;
    });

  }

  viewAdmin(id) {
    console.log(id);
  }

  view(color,size) {
    console.log(color +' ' + size);
  }
}
