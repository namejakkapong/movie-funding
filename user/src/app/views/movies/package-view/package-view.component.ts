import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-package-view',
  templateUrl: './package-view.component.html',
  styleUrls: ['./package-view.component.scss'],
  animations: [SharedAnimations]
})
export class PackageViewComponent implements OnInit {
  public movie: any;
  public packages: any;
  public packages2: any;
  private id: string;
  private user_id: string;
  public user: any;



  constructor(
    private router: Router,
    private movieService: MovieService,
    private userService: UserService,
    private route: ActivatedRoute,
    ) { }

    ngOnInit() {

      this.route.paramMap.subscribe((paraMap: ParamMap)=>{
        if(paraMap.has('id')){
          this.id = paraMap.get('id');
          console.log(this.id);

          this.movieService.show(this.id)
          .subscribe(response => {
            this.movie = response;
            console.log(this.movie);
          });

          this.userService.show(this.user_id)
          .subscribe(response => {
            this.user = response;
            console.log(this.user);
          });

          this.getPackage(this.id);
          this.getPackage2(this.id);
        }
      });
    }

    getPackage(id){
      this.movieService.indexpackage(id)
          .subscribe(response => {
            this.packages = response;
            console.log(this.packages);
          });
    }

    getPackage2(id){
      this.movieService.indexpackage2(id)
          .subscribe(response => {
            this.packages2 = response;
            console.log(this.packages2);
          });
    }



    transferAdd(movie_id , package_id ) {
      console.log(movie_id , package_id );
      this.router.navigate(['/movies/package-view/' + movie_id + '/transfer-add/'+ package_id ]);

    }

    packageAdd(id) {
      //console.log(movie_id);
      this.router.navigate(['/movies/package-add/']);

    }

    // deleteExperienceWork(user_id , experience_id) {
    //   console.log(user_id + experience_id);
    //   this.experienceService.destroy(user_id , experience_id);
    //   this.getExperience(this.id);

    // }

}
