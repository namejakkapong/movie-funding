import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { id } from '@swimlane/ngx-datatable/release/utils';
// import { start } from 'repl';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  index()
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies');
    // BACKEND_URL = http://localhost:8000/api/movie
  }
  store(name: string , name_eng: string, selectFileCover: any, detail : string, description : string, total : string, status : string, start : string, end : string)
  {
    // BACKEND_URL = http://localhost:8000/api/admins , method POST
    const data = {

      name: name,
      name_end: name_eng,
      movie_image : selectFileCover,
      detail: detail,
      description : description,
      total : total,
      status : status,
      start : start,
      end : end,

    };
    this.http.post<{data: any}>(BACKEND_URL + '/movies', data)
    .subscribe(response => {
      console.log(response.data);
    });
  }
  destroy(id: string)
  {
    this.http.delete<{data: any}>(BACKEND_URL + '/movies/' + id).subscribe(response=>{
      console.log(response.data);
    });
    // BACKEND_URL = http://localhost:8000/api/admins , method DELETE
  }

}
