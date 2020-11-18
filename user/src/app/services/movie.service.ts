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
    selectFileCover: any,
    description : string,
    resume : string,
    director : string,
    total : string,
    current_total : string,
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
      movie_pic : selectFileCover,
      description : description,
      resume : resume,
      director : director,
      total : total,
      current_total : current_total,
      status : status,
      screening_date : screening_date,
      start_date : start_date,
      end_date : end_date,

    };
    this.http.post<{data: any}>(BACKEND_URL + '/movies', data)
    .subscribe(response => {
    console.log(data);
    console.log("เพิ่มข้อมูลเรียบร้อย!");
    });
    // console.log(data);
  }

  //-----------------------------------------------------------------

  addtrans(
    id : string ,
    package_id: string,
    user_id: string,
    bank_id: string,
    transfer_amount: string,
    transfer_date: string,
    selectFileCover: any,
    status: string,
    transfer_type: string
    )
  {
    // BACKEND_URL = http://localhost:8000/api/admins , method POST
    const data = {

      movie_id: id,
      package_id: package_id,
      user_id: user_id,
      bank_id: bank_id,
      transfer_amount: transfer_amount,
      transfer_date: transfer_date,
      transfer_pic: selectFileCover,
      status: status,
      transfer_type:transfer_type,

    };
    this.http.post<{data: any}>(BACKEND_URL + '/transfersadd', data)
    .subscribe(response => {
    console.log(data);
    console.log("เพิ่มข้อมูลเรียบร้อย!");
    });
    // console.log(data);
  }

  //---------------------------------------------------------------------

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

  indexpackageall(id: string , package_id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies/'+ id +'/packagesall/'+ package_id);
  }

  indexsend(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies/'+ id +'/sendmoneys');
  }

  showuser(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/users/' + id);
    //BACKEND_URL = http://localhost:8000/api/admins/2
  }

  //============================= ส่วนของ ADMIN =============================================
  //----ข้อมูลที่ ผ่านการตรวจสอบ [ confirm ]------//
  indexadconfirm(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies/'+ id +'/transfersadconfirm');
  }
  //----ข้อมูลที่ ยังไม่ตรวจสอบตรวจสอบ [ not ]------//
  indexadnot(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies/'+ id +'/transfersadnot');
  }
  //----ข้อมูลที่ ไม่ผ่านการตรวจสอบ [ unsuccessful ]------//
  indexadun(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies/'+ id +'/transfersadunsuccessful');
  }
  //==========================================================================================

  //============================= ส่วนของ USER =============================================
  //----ข้อมูลที่ ผ่านการตรวจสอบ [ confirm ]------//
  // indexusconfirm(id: string)
  // {
  //   return this.http.get<{data: any}>(BACKEND_URL + '/users/' + user_id +'/movies/'+ id +'/transfersconfirm');
  // }
  //----ข้อมูลที่ ยังไม่ตรวจสอบตรวจสอบ [ not ]------//
  // indexusnot(id: string)
  // {
  //   return this.http.get<{data: any}>(BACKEND_URL + '/users/' + user_id +'/movies/'+ id +'/transfersnot');
  // }
  //----ข้อมูลที่ ไม่ผ่านการตรวจสอบ [ unsuccessful ]------//
  // indexusun(id: string)
  // {
  //   return this.http.get<{data: any}>(BACKEND_URL + '/users/' + user_id +'/movies/'+ id +'/transfersunsuccessful');
  // }
  //==========================================================================================



  storepackage(
    movie_id: string,
    type_package: string,
    topic: string,
    details: string,
    reward: string,
    amount: string,
    percent: string
    )

  {
    // BACKEND_URL = http://localhost:8000/api/admins , method POST
    const data = {
      movie_id: movie_id,
      type_package: type_package,
      topic: topic,
      details: details,
      reward: reward,
      amount: amount,
      percent: percent,
    };
    this.http.post<{data: any}>(BACKEND_URL + '/packagesadd', data)
    .subscribe(response => {
      console.log(data);
    this.modalService.dismissAll();
    console.log("เพิ่มข้อมูลเรียบร้อย!");
    });
    // console.log(data);
    // console.log("เพิ่มข้อมูลเรียบร้อย!");
  }

 storeprogress(
      movie_id: string,
      topic: string,
      selectFileCover: any,
      detail: string,
      date: string,
      )
      {
        // BACKEND_URL = http://localhost:8000/api/admins , method POST
        const data = {
          movie_id: movie_id,
          topic: topic,
          picture : selectFileCover,
          detail: detail,
          date: date,
        };
        this.http.post<{data: any}>(BACKEND_URL + '/progresses', data)
        .subscribe(response => {
          console.log(data);
        this.modalService.dismissAll();
        console.log("เพิ่มข้อมูลเรียบร้อย!");
        });
        // console.log(data);
        // console.log("เพิ่มข้อมูลเรียบร้อย!");
      }

    indexfund(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies/'+ id +'/transferfunds');
  }

  indexinvest(id: string)
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/movies/'+ id +'/transferinvest');
  }


}
