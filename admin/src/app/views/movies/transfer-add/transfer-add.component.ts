import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-transfer-add',
  templateUrl: './transfer-add.component.html',
  styleUrls: ['./transfer-add.component.scss'],
  animations: [SharedAnimations]
})
export class TransferAddComponent implements OnInit {
  public movie: any;
  private id: string;
  public package: any;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private movieService: MovieService,
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

      }


    });

  }

  onAddPackage(form: NgForm) {
    console.log(form.value);

  }

}
