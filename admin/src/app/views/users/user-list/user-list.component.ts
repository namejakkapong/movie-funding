import {Title} from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
	searchControl: FormControl = new FormControl();
	products;
	filteredProducts;

	confirmResut;


	constructor(private titleService:Title, private modalService: NgbModal,private productService: ProductService) {
		this.titleService.setTitle("Creator & Fundraiser | User");
     }

	ngOnInit() {
		this.productService.getProducts()
		.subscribe((res: any[]) => {
		  this.products = [...res];
		  this.filteredProducts = res;
		});
	
		this.searchControl.valueChanges
		.pipe(debounceTime(200))
		.subscribe(value => {
		  this.filerData(value);
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

	filerData(val) {
		if (val) {
		  val = val.toLowerCase();
		} else {
		  return this.filteredProducts = [...this.products];
		}
	
		const columns = Object.keys(this.products[0]);
		if (!columns.length) {
		  return;
		}
	
		const rows = this.products.filter(function(d) {
		  for (let i = 0; i <= columns.length; i++) {
			const column = columns[i];
			// console.log(d[column]);
			if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
			  return true;
			}
		  }
		});
		this.filteredProducts = rows;
	  }

}
