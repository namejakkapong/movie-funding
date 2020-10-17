import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss'],
  animations: [SharedAnimations]
})
export class PackageAddComponent implements OnInit {

  constructor(
    private router: Router, 
    private modalService: NgbModal
    ) { }

  ngOnInit() {
  }

  onAddpackage(form: NgForm) {
    console.log(form.value);
    
  }

  
}