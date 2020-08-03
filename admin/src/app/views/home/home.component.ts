import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  public getAuthUser: any;
  private nameSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // auth
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListerner()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
    });
    console.log(this.userIsAuthenticated);
    this.getAuthUser = this.authService.getAuthName();
      this.nameSub = this.authService.getAuthDataUpdateListener()
        .subscribe(response => {
          console.log('test : ', response);
          this.getAuthUser = response;
    });

  }

  onLogout() {
    // /this.name = '';
    this.authService.logout();
  }

  

}
