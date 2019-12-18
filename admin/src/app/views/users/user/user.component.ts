import {Title} from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';
import { echartStyles } from 'src/app/shared/echart-styles';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
	chartPie2: any;
	products$;

	constructor(private titleService:Title, private productService: ProductService) {
		this.titleService.setTitle("Creator & Fundraiser | User");
     }

	ngOnInit() {
		this.chartPie2 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					type: 'pie',
					itemStyle: echartStyles.pieLineStyle,
					data: [{
						name: 'Running',
						value: 85,
						...echartStyles.pieLabelOff,
						itemStyle: {
							borderColor: '#4CAF50',
						}
					}, {
						name: 'Completed',
						value: 15,
						...echartStyles.pieLabelOff,
						itemStyle: {
							borderColor: '#ff9800',
						}
					}]
				}]
			}
		};

		this.products$ = this.productService.getProducts();
	}

}
