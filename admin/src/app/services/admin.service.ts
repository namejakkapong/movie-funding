import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private router: Router
    ) { }

  index()
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/admins');
    // BACKEND_URL = http://localhost:8000/api/admins
  }

  show(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/adminshows/' + id);
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
    this.http.delete<{data: any}>(BACKEND_URL + '/admins/' + id).subscribe(response=>{
      console.log(response.data);
    });
    // BACKEND_URL = http://localhost:8000/api/admins , method DELETE
  }

  bank()
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/banks');
    // BACKEND_URL = http://localhost:8000/api/admins
  }

  bankstore(account_name: string, account_number: string, bank_account: string)
  {
    // BACKEND_URL = http://localhost:8000/api/banks , method POST
    const data = {
      account_name: account_name,
      account_number: account_number,
      bank_account: bank_account,
    };
    this.http.post<{data: any}>(BACKEND_URL + '/banks', data)
    .subscribe(response => {
      console.log(data);
    });
  }

  bankupdate(bank_id: string , account_name: string, account_number: string, bank_account: string)
  {
    const data = {
      account_name: account_name,
      account_number: account_number,
      bank_account: bank_account,

    };
    this.http.patch<{data: any}>(BACKEND_URL + '/banks/'+ bank_id , data)
    .subscribe(response => {
      console.log("แก้ไขเสร็จเรียบร้อย");


    });

  }

  bankdestroy(id:string)
  {
    console.log("ไอดีที่ต้องก่ารลบ ไอดีที่ : " +id);
    this.http.delete<{data: any}>(BACKEND_URL + '/banks/' + id)
    .subscribe(response=>{
      // this.router.navigate(['/movies/bank-add']);
      console.log("ลบข้อมูลเรียบร้อย");
    });


  }

  storesendmoneys(
    movie_id: string,
    topic: string,
    details: string,
    amount: string,
    sendmoney_date: string,
    selectFileCover: any)
  {
    // BACKEND_URL = http://localhost:8000/api/admins , method POST
    const data = {
      movie_id: movie_id,
      topic: topic,
      details: details,
      amount: amount,
      sendmoney_date: sendmoney_date,
      sendmoney_pic: selectFileCover,
    };
    this.http.post<{data: any}>(BACKEND_URL + '/sendmoneys', data)
    .subscribe(response => {
      console.log(data);
    this.modalService.dismissAll();
    console.log("เพิ่มข้อมูลเรียบร้อย!");
    });

}

}
