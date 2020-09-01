import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
const BACKEND_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  index()
  {
    // return this.http.get<{data: any}>(BACKEND_URL + '/users/'+ id +'/verifications');
    return this.http.get<{data: any}>(BACKEND_URL + '/verifications');
  }
  store(id: string ,status: string, card_number: string, tel: string, address: string, selectFileCover:any)
  {
    // BACKEND_URL = http://localhost:8000/api/verifications , method POST
    const data = {
      status: status,
      card_number: card_number,
      card_pic: selectFileCover,
      tel: tel,
      address: address,
    };
    this.http.post<{data: any}>(BACKEND_URL + '/users/'+ id + '/verifications', data)
    .subscribe(response => {
      console.log(response.data);
    });
  }

}
