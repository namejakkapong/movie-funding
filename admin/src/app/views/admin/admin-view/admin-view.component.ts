import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  private id: string;
  public admin: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService

    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paraMap: ParamMap)=>{
      if(paraMap.has('id')){
        this.id = paraMap.get('id');
        console.log(this.id);

        this.adminService.show(this.id)
        .subscribe(response => {
          this.admin = response;
          console.log(this.admin);
        });

      }
    });
  }



}
