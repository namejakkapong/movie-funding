import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';

const BACKEND_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }

  index(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/users/'+ id +'/experience');
  }

  store(id: string ,start: string, end: string, position: string, workplace: string)
  {
    // BACKEND_URL = http://localhost:8000/api/admins , method POST
    const data = {
      start: start,
      end: end,
      position: position,
      workplace: workplace,
      
    };
    this.http.post<{data: any}>(BACKEND_URL + '/users/'+ id + '/experience', data)
    .subscribe(response => {
      console.log(response.data);
    });
  }
}
