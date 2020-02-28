import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.scss']
})
export class EducationAddComponent implements OnInit {
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private educationService: EducationService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paraMap: ParamMap)=>{
      if(paraMap.has('id')){
        this.id = paraMap.get('id');
        console.log(this.id);
      }
    });

  }

  onAddEducation(form: NgForm){
      console.log(form.value);
      this.educationService.store(this.id, form.value.graduation_year, form.value.level, form.value.subject, form.value.faculty, form.value.school);
  }

}
