import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HomeService } from './home/home.service';
import { HttpModule , Http} from '@angular/http';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import  {AuthService} from "./auth.service";
import  {AuthGuard} from "./auth.guard";
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [HomeService , AuthService , AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
