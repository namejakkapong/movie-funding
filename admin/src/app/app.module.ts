import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedComponentsModule } from './shared/components/shared-components.module';

import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { VerificationAddComponent } from './views/verification/verification-add/verification-add.component';
import { VerificationViewComponent } from './views/verification/verification-view/verification-view.component';
import { ProgressViewComponent } from './views/progress/progress-view/progress-view.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VerificationAddComponent,
    VerificationViewComponent,
    ProgressViewComponent,

    
    
   
  
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass: AuthInterceptor , multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
