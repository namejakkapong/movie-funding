import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
const BACKEND_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private modalService: NgbModal) { }
  index()
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/users');
    // BACKEND_URL = http://localhost:8000/api/admins
  }
  show(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/users/' + id);
    //BACKEND_URL = http://localhost:8000/api/admins/2
  }
  store(name: string, email: string, password: string, password_confirmation,selectFileCover:any)
  {
    // BACKEND_URL = http://localhost:8000/api/admins , method POST
    const data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      profile_picture: selectFileCover,
    };
    this.http.post<{data: any}>(BACKEND_URL + '/users', data)
    .subscribe(response => {
      console.log(response.data);
    });
  }
  destroy(id: string)
  {
    this.http.delete<{data: any}>(BACKEND_URL + '/users/' + id).subscribe(response=>{
      console.log(response.data);
    });
    // BACKEND_URL = http://localhost:8000/api/admins , method DELETE
  }
  getEducation(id: string){
    return this.http.get<{data: any}>(BACKEND_URL + '/users/'+ id +'/educations');
  }
  update(user_id: string, name: string, address: string, district: string, amphoe: string, province: string, zipcode: string, country: string, career: string, workplace: string)
  {
    const data = {
      name: name,
      address: address,
      district: district,
      amphoe: amphoe,
      province: province,
      zipcode: zipcode,
      country: country,
      career: career,
      workplace: workplace,

      
    };
    this.http.patch<{data: any}>(BACKEND_URL + '/users/'+ user_id , data)
    .subscribe(response => {
      console.log(response.data);
      this.modalService.dismissAll();
    });
  }
}