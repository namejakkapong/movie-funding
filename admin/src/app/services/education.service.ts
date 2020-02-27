import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }

  index(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/users/'+ id +'/educations');
  }

  store(id: string ,graduation_year: string, level: string, subject: string, faculty: string, school: string)
  {
    // BACKEND_URL = http://localhost:8000/api/admins , method POST
    const data = {
      graduation_year: graduation_year,
      level: level,
      subject: subject,
      faculty: faculty,
      school: school,
    };
    this.http.post<{data: any}>(BACKEND_URL + '/users'+ id + 'educations', data)
    .subscribe(response => {
      console.log(response.data);
    });
  }

  

}
