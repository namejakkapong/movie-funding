import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss'],
  animations: [SharedAnimations]
})
export class PackageAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
}