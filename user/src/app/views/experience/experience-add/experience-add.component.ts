import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.scss']
})
export class ExperienceAddComponent implements OnInit {
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private experienceService: ExperienceService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paraMap: ParamMap)=>{
      if(paraMap.has('id')){
        this.id = paraMap.get('id');
        console.log(this.id);
      }
    });
  }

  onAddExperience(form: NgForm){
    console.log(form.value);
    this.experienceService.store(this.id, form.value.start, form.value.end, form.value.position, form.value.workplace);
  }

}
