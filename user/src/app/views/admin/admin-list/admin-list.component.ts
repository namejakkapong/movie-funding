import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  confirmResut;
  public admins: any;

  constructor(private modalService: NgbModal, private adminService: AdminService,private router: Router) {
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
  getAdmins() {
		this.adminService.index()
		.subscribe(response => {
		  this.admins = [...response.data];
		});
	}


  viewAdmin(id) {
    // console.log(id);
    this.router.navigate(['/admin/admin-view']);
  }

  view(color,size) {
    console.log(color +' '+ size);
  }


  delete(id){
    // console.log(1);
    this.adminService.destroy(id);
    this.getAdmins();
  }

}