import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
=======

>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4
const BACKEND_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class VerificationService {
<<<<<<< HEAD
  constructor(private http: HttpClient, private modalService: NgbModal) { }
=======

  constructor(private http: HttpClient, private modalService: NgbModal) { }

>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4
  index()
  {
    // return this.http.get<{data: any}>(BACKEND_URL + '/users/'+ id +'/verifications');
    return this.http.get<{data: any}>(BACKEND_URL + '/verifications');
  }
<<<<<<< HEAD
=======

>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4
  store(id: string ,status: string, card_number: string, tel: string, address: string, selectFileCover:any)
  {
    // BACKEND_URL = http://localhost:8000/api/verifications , method POST
    const data = {
      status: status,
      card_number: card_number,
      card_pic: selectFileCover,
      tel: tel,
      address: address,
<<<<<<< HEAD
=======

>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4
    };
    this.http.post<{data: any}>(BACKEND_URL + '/users/'+ id + '/verifications', data)
    .subscribe(response => {
      console.log(response.data);
    });
  }
<<<<<<< HEAD
}
=======

}
>>>>>>> ff214c9eb7f64b48c4cd237670f3928ef23e92e4
