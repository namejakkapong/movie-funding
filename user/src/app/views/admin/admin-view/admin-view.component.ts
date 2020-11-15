import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  bankAdd(id) {
    // console.log(id);
    this.router.navigate(['/admin/bank-add']);
  }

}
