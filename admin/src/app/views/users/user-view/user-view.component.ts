import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  public user: any;

  constructor(private userService: UserService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    
    this.route.paramMap.subscribe((paraMap: ParamMap)=>{
      if(paraMap.has('id')){
        console.log(paraMap.get('id'));
    this.userService.show(paraMap.get('id'))
		.subscribe(response => {
      console.log(response.data);
		  this.user = response.data;
    });
      }
    });
  }

}
