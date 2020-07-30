import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
}
