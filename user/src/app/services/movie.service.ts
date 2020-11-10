import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { start } from 'repl';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
    ) { }

  index()
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies');
    // BACKEND_URL = http://localhost:8000/api/movies
  }

  show(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies/' + id);
    //BACKEND_URL = http://localhost:8000/api/movies/id
  }

  store(
    category_id: string ,
    name_en: string,
    name_th : string,
    //selectFileCover: any,
    description : string,
    resume : string,
    director : string,
    total : string,
    status : string,
    screening_date : string,
    start_date : string,
    end_date : string)
  {
    // BACKEND_URL = http://localhost:8000/api/admins , method POST
    const data = {

      category_id: category_id,
      name_en: name_en,
      name_th: name_th,
      //movie_pic : selectFileCover,
      description : description,
      resume : resume,
      director : director,
      total : total,
      status : status,
      screening_date : screening_date,
      start_date : start_date,
      end_date : end_date,

    };
    // this.http.post<{data: any}>(BACKEND_URL + '/movies', data)
    // .subscribe(response => {
    //   console.log(response.data);
    // });
    console.log(data);
  }

  destroy(id: string)
  {
    this.http.delete<{data: any}>(BACKEND_URL + '/movies/' + id).subscribe(response=>{
      console.log(response.data);
    });
    // BACKEND_URL = http://localhost:8000/api/admins , method DELETE
  }

  indexprogress(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies/'+ id +'/progresses');
  }

  indexpackage(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies/'+ id +'/packages');
  }

  indexpackage2(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies/'+ id +'/packages2');
  }

}
