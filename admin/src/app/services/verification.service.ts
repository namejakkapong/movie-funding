import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private http: HttpClient) { }
  index()
  {
    return this.http.get<{data: any}>(BACKEND_URL + '/verifications');
    // BACKEND_URL = http://localhost:8000/api/movie
  }
  
}
