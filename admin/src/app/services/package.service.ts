import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';
import { environment } from './../../environments/environment.prod';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient, private modalService: NgModel) { }

  index(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies/'+ id +'/packages');
    // BACKEND_URL = http://localhost:8000/api/admins
  }

  show(id: string)
  {
    // BACKEND_URL = http://localhost:8000/api/admins/2
  }

  store(type_package: string, topic: string, details: string, reward: string, amount: string, percent: string)
  {
    // BACKEND_URL = http://localhost:8000/api/admins , method POST
    const data = {
      type_package: type_package,
      topic: topic,
      details: details,
      reward: reward,
      amount: amount,
      percent: percent,
    };
    //this.http.post<{data: any}>(BACKEND_URL + '/packages', data)
    // .subscribe(response => {
    //   console.log(response.data);
    //   this.modalService.dismissAll();
    // });
    console.log(data);

  }

}
