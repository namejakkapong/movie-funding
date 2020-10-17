import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-transfer-add',
  templateUrl: './transfer-add.component.html',
  styleUrls: ['./transfer-add.component.scss'],
  animations: [SharedAnimations]
})
export class TransferAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
