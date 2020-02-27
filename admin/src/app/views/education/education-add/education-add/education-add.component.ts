import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.scss']
})
export class EducationAddComponent implements OnInit {

  constructor(private educationService: EducationService) { }

  ngOnInit() {
  }

  onAddEducation(id)
  {
      console.log(123);
  }
}
