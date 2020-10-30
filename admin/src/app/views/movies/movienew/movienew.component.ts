import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-movienew',
  templateUrl: './movienew.component.html',
  styleUrls: ['./movienew.component.scss'],
  animations: [SharedAnimations]
})
export class MovienewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  progressView(id) {
    // console.log(123);
    this.router.navigate(['/movies/progress-view']);
  }

  packageView(id) {
    // console.log(456);
    this.router.navigate(['/movies/package-view']);
  }

  packageAdd(id) {
    // console.log(123);
    this.router.navigate(['/movies/package-add']);
  }

  transferList(id) {
    // console.log(123);
    this.router.navigate(['/movies/transfer-list']);
  }

  progressAdd(id) {
    // console.log(123);
    this.router.navigate(['/movies/progress-add']);
  }

}
