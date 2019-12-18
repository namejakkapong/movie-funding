import { Injectable, Inject } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
// import { WINDOW, LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Router } from '@angular/router';
// import { AlertService } from 'ngx-alerts';
const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  private tokenTimer: any;
  private errorListener = new Subject<any>();
  private authData: any;
  private authDataUpdated = new BehaviorSubject('');

  constructor(
    // @Inject(WINDOW) private window: Window,
    // @Inject(LOCAL_STORAGE) private localStorage: any,
    private http: HttpClient, private router: Router) { }

  getErrorListener() {
    return this.errorListener.asObservable();
  }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListerner() {
    return this.authStatusListener.asObservable();
  }

  register(name: string, username: string, password: string, password_confirmation: string, phone: string, email: string, gender: string) {
    const data = { name: name, username: username, password: password, password_confirmation: password_confirmation, phone: phone, email: email, gender: gender};
    this.http.post<{data: any}>(BACKEND_URL + '/register' , data)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/auth/login']);
        // this.alertService.success('Already registered');
      } , error => {
        console.log(error.error.error);
        this.errorListener.next(error.error.error);
      });
  }

  login(email: string, password: string) {
    const data = {email: email, password: password};
    this.http.post<{access_token: string , data: any, expiresIn: number}>(BACKEND_URL + '/login' , data)
      .subscribe(response => {
        const token = response.access_token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          // console.log(expirationDate);
          this.saveAuthData(token , expirationDate,  response.data.data);
          this.getAuthName();
          // this.router.navigate(['/']);
          // console.log(response);
        }
      } , error => {
        console.log(error);
        // this.alertService.danger('Username or Passsword is incorrect');
        // this.showAlerts(error.error.error, 'error');
      });
  }

  logout() {
    this.http.get<{access_token: string , expiresIn: number}>(BACKEND_URL + '/logout')
      .subscribe(response => {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
        console.log(response);
      } , error => {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
        console.log(error);
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  private setAuthTimer(duration: number) {
    console.log('Setting timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string , expirationDate: Date, data: any) {
    localStorage.setItem('token' , token);
    localStorage.setItem('expiration' , expirationDate.toISOString());
    localStorage.setItem('name' , data.name);
    localStorage.setItem('profile_picture' , data.profile_picture);
    localStorage.setItem('username' , data.username);
    localStorage.setItem('user_id' , data.id);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('name');
    localStorage.removeItem('profile_picture');
    localStorage.removeItem('username');
    localStorage.removeItem('user_id');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const name = localStorage.getItem('name');
    const profile_picture = localStorage.getItem('profile_picture');
    const username = localStorage.getItem('username');
    const user_id = localStorage.getItem('user_id');
    if (!token || !expirationDate) {
      return;
    } else {
      return {
        token: token,
        expirationDate: new Date(expirationDate),
        name: name,
        profile_picture: profile_picture,
        username: username,
        user_id: user_id
      };
    }
  }

  getAuthName() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const name = localStorage.getItem('name');
    const profile_picture = localStorage.getItem('profile_picture');
    const username = localStorage.getItem('username');
    const user_id = localStorage.getItem('user_id');
    if (!token || !expirationDate) {
        this.authDataUpdated.next('');
        return this.authData = {
          name: '',
          username: '',
          profile_picture: '',
          user_id: '',
        };
    } else {
      this.authData = {
        name: name,
        username: username,
        profile_picture: profile_picture,
        user_id: user_id,
      };
      this.authDataUpdated.next(this.authData);
      return this.authData;
    }
  }

  getAuthDataUpdateListener() {
    return this.authDataUpdated.asObservable();
  }

  showAlerts(message: string, status: string): void {
    if (status === 'error') {
      // this.alertService.danger(message);
    }
    if (status === 'success') {
      // this.alertService.success(message);
    }
  }
}
