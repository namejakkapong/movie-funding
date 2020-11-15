import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-progress-view',
  templateUrl: './progress-view.component.html',
  styleUrls: ['./progress-view.component.scss'],
  animations: [SharedAnimations]
})
export class ProgressViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
