import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { MovieService } from 'src/app/services/movie.service';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movienew',
  templateUrl: './movienew.component.html',
  styleUrls: ['./movienew.component.scss'],
  animations: [SharedAnimations]
})
export class MovienewComponent implements OnInit {
  public movie: any;
  public movies: any;
  public progresses: any;
  public sendmoneys: any;
  private id: string;
  // public categories: any;
  // public movies: any;
  confirmResut;
  //admin
  public adconfirm: any;
  public adnot: any;
  public adun: any;
  //user
  // public usconfirm: any;
  // public usnot: any;
  // public usun: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private modalService: NgbModal

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
        this.getProgress(this.id);
        this.getSend(this.id);
        // this.getMovieAll(this.id);
        //admin
        this.getAdtransfer(this.id);
        this.getAdtransferNot(this.id);
        this.getAdtransferUn(this.id);
        //user
        // this.getUsertransfer(this.id);
        // this.getUsertransferNot(this.id);
        // this.getUsertransferUn(this.id);

      }
    });
  }

  getProgress(id){
    this.movieService.indexprogress(id)
        .subscribe(response => {
          this.progresses = response;
          console.log(this.progresses);
        });
  }

  getSend(id){
    this.movieService.indexadconfirm(id)
        .subscribe(response => {
          this.sendmoneys = response;
          console.log(this.sendmoneys);
        });
  }
  //====================================== ข้อมูลการโอนเงิน ADMIN ======================================
  //--ข้อมูลการโอนเงิน สำเร็จ [ confirm ]--
  getAdtransfer(id){
    this.movieService.indexadconfirm(id)
        .subscribe(response => {
          this.adconfirm = response;
          console.log(this.adconfirm);
        });
  }
  //--ข้อมูลการโอนเงิน ยังไม่ตรวจสอบ [ not ]--
  getAdtransferNot(id){
    this.movieService.indexadnot(id)
        .subscribe(response => {
          this.adnot = response;
          console.log(this.adnot);
        });
  }
  //--ข้อมูลการโอนเงิน ไม่ผ่าน [ not ]--
  getAdtransferUn(id){
    this.movieService.indexadun(id)
        .subscribe(response => {
          this.adun = response;
          console.log(this.adun);
        });
  }
   //====================================== ข้อมูลการโอนเงิน ADMIN ======================================
  //--ข้อมูลการโอนเงิน สำเร็จ [ confirm ]--
  // getUsertransfer(id){
  //   this.movieService.indexusconfirm(id)
  //       .subscribe(response => {
  //         this.usconfirm = response;
  //         console.log(this.usconfirm);
  //       });
  // }
  //--ข้อมูลการโอนเงิน ยังไม่ตรวจสอบ [ not ]--
  // getUsertransferNot(id){
  //   this.movieService.indexusnot(id)
  //       .subscribe(response => {
  //         this.usnot = response;
  //         console.log(this.usnot);
  //       });
  // }
  //--ข้อมูลการโอนเงิน ไม่ผ่าน [ not ]--
  // getUsertransferUn(id){
  //   this.movieService.indexusun(id)
  //       .subscribe(response => {
  //         this.usun = response;
  //         console.log(this.usun);
  //       });
  // }
  //=====================================================================================================


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        console.log(result);
      }, (reason) => {
        console.log('Err!', reason);
      });
  }
  confirm(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
      .result.then((result) => {
        this.confirmResut = `Closed with: ${result}`;
      }, (reason) => {
        this.confirmResut = `Dismissed with: ${reason}`;
      });

    }
  // getCategory(id) {
  //   this.categoriesService.index()
  //   .subscribe(response => {
  //     this.categories = response.data;
  //      console.log(this.categories);

	// 	});
  // }

  progressView(id) {
    // console.log(123);
    this.router.navigate(['/movies/progress-view']);
  }

  packageView(id) {
    console.log(id);
    this.router.navigate(['/movies/package-view/' + id]);
    // this.router.navigate(['/users/verification/add/' + id]);
  }

  packageAdd(id) {
    // console.log(123);
    this.router.navigate(['/movies/package-add']);
  }

  transferList(id) {
    // console.log(123);
    this.router.navigate(['/movies/transfer-list']);
  }


  progressAdd(id) {
    // console.log(123);
    this.router.navigate(['/movies/progress-add']);
  }

}
