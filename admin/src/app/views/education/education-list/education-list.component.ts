import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../../services/education.service';
@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent implements OnInit {
public educations: any;


  constructor(private educationService: EducationService) { }

  ngOnInit() {
    // this.getEducation();
  }

  // getEducation() {
  //   this.educationService.index()
  //   .subscribe(response => {
  //   this.educations = [...response.data];
  //   });
  // }
  
}
