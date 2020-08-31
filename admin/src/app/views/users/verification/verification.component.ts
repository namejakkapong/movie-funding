import {Title} from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { VerificationService } from 'src/app/services/verification.service';
<<<<<<< HEAD
=======

>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  searchControl: FormControl = new FormControl();
<<<<<<< HEAD
  confirmResut;
	public verifications: any;
	filteredVerifications;
  constructor(
    private titleService:Title,
    private modalService: NgbModal,
    private verificationService: VerificationService,
    private router: Router
    ) { }
    ngOnInit() {
      this.getUsers();
      this.searchControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe(value => {
        this.filerData(value);
      });
    }
    getUsers() {
      this.verificationService.index()
      .subscribe(response => {
        this.verifications = [response.data];
        this.filteredVerifications = response.data;
      });
    }

	confirm(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true });
	  }
=======

  confirmResut;
	public verifications: any;
	filteredVerifications;

  constructor(
    private titleService:Title,
    private modalService: NgbModal,
    private verificationService: VerificationService,
    private router: Router
    ) { }

    ngOnInit() {
      this.getUsers();

      this.searchControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe(value => {
        this.filerData(value);
      });
    }

    getUsers() {
      this.verificationService.index()
      .subscribe(response => {
        this.verifications = [...response.data];
        this.filteredVerifications = response.data;
      });
    }


	confirm(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true });
	  }

>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4
	filerData(val) {
		if (val) {
		  val = val.toLowerCase();
		} else {
		  return this.filteredVerifications = [...this.verifications];
		}
<<<<<<< HEAD
=======

>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4
		const columns = Object.keys(this.verifications[0]);
		if (!columns.length) {
		  return;
		}
<<<<<<< HEAD
=======

>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4
		const rows = this.verifications.filter(function(d) {
		  for (let i = 0; i <= columns.length; i++) {
			const column = columns[i];
			// console.log(d[column]);
			if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
			  return true;
			}
		  }
		});
		this.filteredVerifications = rows;
	  }
<<<<<<< HEAD
}
=======

}
>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4