import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const BACKEND_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  index(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/users/'+ id +'/experience');
  }
  store(id: string ,start: string, end: string, position: string, workplace: string)
  {
    // BACKEND_URL = http://localhost:8000/api/admins , method POST
    const data = {
      start_year: start,
      end_year: end,
      position: position,
      workplace: workplace,
    };
    this.http.post<{data: any}>(BACKEND_URL + '/users/'+ id + '/experience', data)
    .subscribe(response => {
      console.log(response.data);

    });
    console.log("เพิ่มข้อมูลเรียบร้อย!");
  }

  update(experience_id: string , user_id: string, start_year: string, end_year: string, position: string, workplace: string)
  {
    const data = {
      start_year: start_year,
      end_year: end_year,
      position: position,
      workplace: workplace,

    };
    this.http.patch<{data: any}>(BACKEND_URL + '/users/'+ user_id + '/experience/'+ experience_id, data)
    .subscribe(response => {
      console.log(response.data);
      this.modalService.dismissAll();
    });
    console.log("แก้ไขข้อมูลเรียบร้อย!");
  }

  destroy(user_id : string, experience_id: string)
  {
    // console.log(user_id);
    // console.log(experience_id);

    this.http.delete<{data: any}>(BACKEND_URL + '/users/'+ user_id +'/experience/' + experience_id).subscribe(response=>{
      console.log(response.data);
      this.modalService.dismissAll();
    });
    console.log("ลบข้อมูลเรียบร้อย!");
  }
}

