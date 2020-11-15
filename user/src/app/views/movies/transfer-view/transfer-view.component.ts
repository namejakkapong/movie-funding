import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-transfer-view',
  templateUrl: './transfer-view.component.html',
  styleUrls: ['./transfer-view.component.scss'],
  animations: [SharedAnimations]
})
export class TransferViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
