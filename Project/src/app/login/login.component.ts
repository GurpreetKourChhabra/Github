import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import  {AuthService} from "../auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  signUpEmail: string;
  pass: string;
  showEmailErrorMsg:boolean = false;
  showPassErrorMsg:boolean = false;
  modelRefrence: any;
  constructor(private router: Router , private modalService: NgbModal , private service: AuthService) { }

  ngOnInit() {
  }

    login(form : NgForm) {
      this.service.signIn(form.value.emailVal , form.value.passwordVal);
      this.router.navigate(['search']);
    }

    openSignUpForm(content) {
      this.modelRefrence = this.modalService.open(content);
    }

    signUp(form : NgForm , content) {
      this.service.signUpUser(form.value.signUpEmail , form.value.pass);
      this.modelRefrence.close();
    }
}
