import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss']
})
export class AdminAddComponent implements OnInit {


  constructor(private adminService: AdminService) {
   }

  ngOnInit() {
  }

  onAddAdmin(form: NgForm)
  {
      console.log(form.form.value);
      this.adminService.store(form.form.value.first_name +' '+ form.form.value.last_name, form.form.value.email, form.form.value.password, form.form.value.password_confirmation);
  }

}
