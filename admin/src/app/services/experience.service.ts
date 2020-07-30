import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const BACKEND_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
<<<<<<< HEAD
  constructor(private http: HttpClient, private modalService: NgbModal) { }
=======

  constructor(private http: HttpClient, private modalService: NgbModal) { }

>>>>>>> de034fb6bff5a8bc489075e68690cd86f4f4cfc8
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
  }
<<<<<<< HEAD
  update(education_id: string , user_id: string,start_year: string,end_year: string,position: string,workplace: string)
  {
    console.log(education_id);
    console.log(user_id);
    console.log(start_year,end_year,position,workplace);
    this.modalService.dismissAll();
  }
  destroy(user_id : string, experience_id: string)
  {
    // console.log(user_id);
    // console.log(experience_id);
=======

  update(experience_id: string , user_id: string,start_year: string,end_year: string,position: string,workplace: string)
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
  
  {
   
    console.log(user_id);
    console.log(start_year,end_year,position,workplace);
    this.modalService.dismissAll();
   
  }


  {
    // console.log(user_id);
    // console.log(experience_id);
     
>>>>>>> de034fb6bff5a8bc489075e68690cd86f4f4cfc8
    this.http.delete<{data: any}>(BACKEND_URL + '/users/'+ user_id +'/experience/' + experience_id).subscribe(response=>{
      console.log(response.data);
    });
  }
<<<<<<< HEAD
}
=======
}
}
>>>>>>> de034fb6bff5a8bc489075e68690cd86f4f4cfc8
