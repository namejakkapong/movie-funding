import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  index()
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/admins');
    // BACKEND_URL = http://localhost:8000/api/admins
  }

  show(id: string)
  {
    // BACKEND_URL = http://localhost:8000/api/admins/2
  }

  store(name: string, email: string, password: string, password_confirmation)
  {
    // BACKEND_URL = http://localhost:8000/api/admins , method POST
    const data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    this.http.post<{data: any}>(BACKEND_URL + '/admins', data)
    .subscribe(response => {
      console.log(response.data);
    });
  }

  update(id: string, name: string)
  {
    // BACKEND_URL = http://localhost:8000/api/admins , method PATCH
  }

  destroy(id: string)
  {
    // BACKEND_URL = http://localhost:8000/api/admins , method DELETE
  }
}
