import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { EducationService } from 'src/app/services/education.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { ExperienceService } from 'src/app/services/experience.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  public user: any;
  private id: string;
  public educations: any;
  public experiences: any;

  constructor(private userService: UserService,private experienceService: ExperienceService, private educationService: EducationService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
   }

  ngOnInit() {
    
    this.route.paramMap.subscribe((paraMap: ParamMap)=>{
      if(paraMap.has('id')){
        this.id = paraMap.get('id');
        console.log(this.id);

        this.userService.show(this.id)
        .subscribe(response => {
          
          this.user = response.data;
          console.log(this.user);
        });
        this.educationService.index(this.id)
        .subscribe(response => {
          this.educations = response.data;
          console.log(this.educations);
        });
        this.experienceService.index(this.id)
        .subscribe(response => {
          this.experiences = response.data;
          console.log(this.experiences);
        });
      }
    });


  }
  
  addEducation(id) {
    // console.log(id);
    this.router.navigate(['educations/add/' + id]);
  }
  addExperience(id) {
    // console.log(id);
    this.router.navigate(['experiences/add/' + id]);
  }

  DeleteInfor(user_id , education_id) {
    // console.log(id + edu_id);
    this.educationService.destroy(user_id , education_id);
    
  }

  editEducation(form: NgForm,education_id: string) {
    // console.log(this.id);
    // console.log(education_id);
    this.educationService.update(education_id,this.id,form.value.graduation_year, form.value.level, form.value.subject, form.value.faculty, form.value.school);
    
    // this.modalService.dismissAll();
  }

  open(modal) {
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title' })
    .result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log('Err!', reason);
    });
  }
}