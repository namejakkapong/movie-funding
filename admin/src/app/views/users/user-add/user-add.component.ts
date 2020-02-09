import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  constructor(private userService: UserService) {
   }

  ngOnInit() {
  }
  onAddUser(form: NgForm)
  {
      console.log(form.form.value);
      this.userService.store(form.form.value.first_name +' '+ form.form.value.last_name, form.form.value.email, form.form.value.password, form.form.value.password_confirmation);
  }

}
