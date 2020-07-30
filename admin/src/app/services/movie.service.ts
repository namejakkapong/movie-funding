import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  store(category_id: string, name: string,name_eng: string, details: string, description: string,total : string, status: string, start: Date, end: Date,)
  {
    // BACKEND_URL = http://localhost:8000/api/categories , method POST
    const data = {
      category_id: category_id,
      name : name,
      name_eng : name_eng,
      details : details,
      description : description, 
      total : total,
      status : status, 
      start : start,
      end: end ,
    };
    this.http.post<{data: any}>(BACKEND_URL + '/movies', data)
    .subscribe(response => {
      console.log(response.data);
    });
  }

}
