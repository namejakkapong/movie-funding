import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  index(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/users/'+ id +'/educations');
  }

  store(
    id: string ,
    graduation_year: string,
    level: string,
    subject: string,
    faculty: string,
    school: string)
  {
    // BACKEND_URL = http://localhost:8000/api/admins , method POST
    const data = {
      graduation_year: graduation_year,
      level: level,
      subject: subject,
      faculty: faculty,
      school: school,
    };
    this.http.post<{data: any}>(BACKEND_URL + '/users/'+ id + '/educations', data)
    .subscribe(response => {
      console.log(response.data);
      //this.modalService.dismissAll();
    });
    console.log("เพิ่มข้อมูลเรียบร้อย!");
  }

  update(education_id: string , user_id: string, graduation_year: string, level: string, subject: string, faculty: string, school: string)
  {
    const data = {
      graduation_year: graduation_year,
      level: level,
      subject: subject,
      faculty: faculty,
      school: school,
    };
    this.http.patch<{data: any}>(BACKEND_URL + '/users/'+ user_id + '/educations/'+ education_id, data)
    .subscribe(response => {
      console.log(response.data);

    });
    console.log("แก้ไขข้อมูลเรียบร้อย!");
  }

  destroy(user_id : string, education_id: string)
  {
    // console.log(user_id);
    // console.log(education_id);

    this.http.delete<{data: any}>(BACKEND_URL + '/users/'+ user_id +'/educations/' + education_id).subscribe(response=>{
      console.log(response.data);
      this.modalService.dismissAll();
    });
    console.log("ลบข้อมูลเรียบร้อย!");
  }
}
