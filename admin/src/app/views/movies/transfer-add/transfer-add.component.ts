import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-transfer-add',
  templateUrl: './transfer-add.component.html',
  styleUrls: ['./transfer-add.component.scss'],
  animations: [SharedAnimations]
})
export class TransferAddComponent implements OnInit {
  public movie: any;
  private id: string;
  private package_id: string;
  public packages: any;
  public banks: any;


  constructor(
    private modalService: NgbModal,
    private router: Router,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private adminService: AdminService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paraMap: ParamMap)=>{
      if(paraMap.has('id')){
        this.id = paraMap.get('id');
        this.package_id = paraMap.get('package_id');
        console.log(this.id);
        console.log(this.package_id);


        this.movieService.show(this.id)
        .subscribe(response => {
          this.movie = response;
          console.log(this.movie);
        });
        this.movieService.indexpackageall(this.id,this.package_id)
        .subscribe(response => {
          this.packages = response;
          console.log(this.packages);
        });
        this.getBank();
      }

    });

  }

  getBank(){
    this.adminService.bank()
        .subscribe(response => {
          this.banks = response;
          console.log(this.banks);
        });
  }

  onAddPackage(form: NgForm) {
    console.log(form.value);

  }

}
