import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss'],
  animations: [SharedAnimations]
})
export class TransferListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  transferView(id) {
    // console.log(123);
    this.router.navigate(['/movies/transfer-view']);
  }

}
