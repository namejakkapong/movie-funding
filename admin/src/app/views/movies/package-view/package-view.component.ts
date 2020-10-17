import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-package-view',
  templateUrl: './package-view.component.html',
  styleUrls: ['./package-view.component.scss'],
  animations: [SharedAnimations]
})
export class PackageViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  transferAdd(id) {
    // console.log(123);
    this.router.navigate(['/movies/transfer-add']);
  }

}
