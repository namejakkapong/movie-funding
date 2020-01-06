import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { AuthService } from '../auth.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AuthService } from '../../shared/services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [SharedAnimations]
})
export class LoginComponent implements OnInit {
    loading: boolean;
    loadingText: string;
    userIsAuthenticated = false;
    private authListenerSubs: Subscription;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authListenerSubs = this.authService.getAuthStatusListerner()
        .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
        });
        if (this.userIsAuthenticated) {
            this.router.navigate(['']);
        }

        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                this.loadingText = 'Loading Dashboard...';

                this.loading = true;
            }
            if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                this.loading = false;
            }
        });     
    }

    onLogin(form: NgForm) {
        this.loading = true;
        this.loadingText = 'Logging in...';
        if(form.invalid) {
          this.loading = false;
          return;
        }
        console.log(form.value);
        this.authService.login(form.value.email, form.value.password);
    }

}