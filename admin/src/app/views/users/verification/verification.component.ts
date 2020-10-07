import {Title} from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { VerificationService } from 'src/app/services/verification.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  searchControl: FormControl = new FormControl();

  confirmResut;
	public verifications: any;
	filteredVerifications;

  constructor(
    //private titleService:Title,
    private modalService: NgbModal,
    private verificationService: VerificationService,
    private router: Router
    ) { }

    ngOnInit() { }
}


