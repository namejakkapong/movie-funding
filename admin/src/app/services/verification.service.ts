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
    //return this.http.get<{data: any}>(BACKEND_URL + '/users/'+ id +'/verifications');
    return this.http.get<{data: any}>(BACKEND_URL + '/verifications');

  }
  store(user_id: string, type: string, card_number: string, status: string, address: string)
  //selectFileCover: any,
  {
    // BACKEND_URL = http://localhost:8000/api/verifications , method POST
    const data = {
      user_id: user_id,
      type: type,
      card_number: card_number,
      //card_pic: selectFileCover,
      status: status,
      address: address,

    };
    // this.http.post<{data: any}>(BACKEND_URL + '/verifications', data)
    // .subscribe(response => {
    //   console.log(response.data);
    // });
    console.log(data);

  }

}
