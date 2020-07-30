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
        this.getEducation(this.id);
        this.getExperience(this.id);
       
      }
    });


  }
  getEducation(id){
    this.educationService.index(id)
        .subscribe(response => {
          this.educations = response.data;
          console.log(this.educations);
        });
  }

  getExperience(id){
    this.experienceService.index(id)
    .subscribe(response => {
      this.experiences = response.data;
      console.log(this.experiences);
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

  deleteWork(user_id , experience_id) {
    //console.log(user_id + experience_id);
<<<<<<< HEAD
    this.experienceService.destroy(user_id , experience_id);
=======
    // this.experienceService.destroy(user_id , experience_id);
>>>>>>> de034fb6bff5a8bc489075e68690cd86f4f4cfc8
    
  }

  editEducation(form: NgForm,education_id: string) {
    // console.log(this.id);
    // console.log(education_id);
    this.educationService.update(education_id,this.id,form.value.graduation_year, form.value.level, form.value.subject, form.value.faculty, form.value.school);
    this.getEducation(this.id);
    // this.modalService.dismissAll();
  }

  editExperience(form: NgForm,experience_id: string) {
    //  console.log(this.id);
    //  console.log(experience_id);
    this.experienceService.update(experience_id,this.id,form.value.start_year, form.value.end_year, form.value.position, form.value.workplace);
    
    //this.modalService.dismissAll();
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