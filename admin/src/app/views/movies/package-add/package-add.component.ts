import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VerificationService } from 'src/app/services/verification.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss'],
  animations: [SharedAnimations]
})
export class PackageAddComponent implements OnInit {
  public packages: any;
  public movie: any;
  private id: string;
  public movies: any;


  constructor(
    private modalService: NgbModal,
    private verificationService : VerificationService,
    private router: Router,
    private movieService: MovieService,
    private route: ActivatedRoute,

    ) { }

    ngOnInit() {

        this.movieService.index()
        .subscribe(response => {
          this.movies = response.data;
           console.log(this.movies);
        });
    }

    onAddpackagefunds(form: NgForm) {
      //console.log(form.value);
      this.movieService.storepackage(
        form.value.movie_id,
        form.value.type_package,
        form.value.topic,
        form.value.details,
        form.value.reward,
        form.value.amount,
        form.value.percent
        );

    }

    onAddpackageinvest(form: NgForm) {
    //console.log(form.value);
    this.movieService.storepackage(
      form.value.movie_id,
      form.value.type_package,
      form.value.topic,
      form.value.details,
      form.value.reward,
      form.value.amount,
      form.value.percent
      );
  }






}
