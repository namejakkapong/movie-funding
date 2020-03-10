import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  index()
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/categories');
    // BACKEND_URL = http://localhost:8000/api/categories
  }

  show(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/categories/'+ id);
    // BACKEND_URL = http://localhost:8000/api/categories/2
  }

  store(name: string, eng: string)
  {
    // BACKEND_URL = http://localhost:8000/api/categories , method POST
    const data = {
      name: name,
      eng : eng,
    };
    this.http.post<{data: any}>(BACKEND_URL + '/categories', data)
    .subscribe(response => {
      console.log(response.data);
    });
  }

  update(name: string , eng: string)
  {
    console.log(name, eng);
    this.modalService.dismissAll();
  }

  destroy(id:string)
  {
    console.log(id);
    
     
    this.http.delete<{data: any}>(BACKEND_URL + '/categories/' + id)
    .subscribe(response=>{
      console.log(response.data);
    });
  }

}