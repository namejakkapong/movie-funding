import {Title} from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
	searchControl: FormControl = new FormControl();

	confirmResut;
	public users: any;
	filteredUsers;


	constructor(
    private titleService:Title,
    private modalService: NgbModal,
    private userService: UserService,
    private router: Router
    ) {
		this.titleService.setTitle("Creator & Fundraiser | User");
	 }

	ngOnInit() {
		this.getUsers();

		this.searchControl.valueChanges
		.pipe(debounceTime(200))
		.subscribe(value => {
		  this.filerData(value);
		});
	}

	getUsers() {
		this.userService.index()
		.subscribe(response => {
		  this.users = [...response.data];
		  this.filteredUsers = response.data;
		});
	}

	confirm(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true });
	  }

	filerData(val) {
		if (val) {
		  val = val.toLowerCase();
		} else {
		  return this.filteredUsers = [...this.users];
		}

		const columns = Object.keys(this.users[0]);
		if (!columns.length) {
		  return;
		}

		const rows = this.users.filter(function(d) {
		  for (let i = 0; i <= columns.length; i++) {
			const column = columns[i];
			// console.log(d[column]);
			if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
			  return true;
			}
		  }
		});
		this.filteredUsers = rows;
	  }

	  viewUser(id) {
		  console.log(id);
		  this.router.navigate(['users/creator&fundraiser/' + id]);
	  }

	  delete(id) {
		  //console.log(id);
		  this.userService.destroy(id);
		  this.getUsers();
	  }







}
