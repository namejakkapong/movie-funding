import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { EducationService } from 'src/app/services/education.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { ExperienceService } from 'src/app/services/experience.service';

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

  constructor(private userService: UserService,private experienceService: ExperienceService, private educationService: EducationService, private route: ActivatedRoute, private router: Router) {
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
}
