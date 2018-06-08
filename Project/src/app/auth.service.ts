import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  token: string;
  constructor() { }

  signUpUser(email: string , password: string) {

    console.log(email);
    firebase.auth().createUserWithEmailAndPassword(email , password).catch(
      error => {
        console.log(error);
      }
    );
  }

  signIn(email: string , password: string) {
    firebase.auth().signInWithEmailAndPassword(email , password).then(
      response => {
        firebase.auth().currentUser.getToken().then(
          token => {
            this.token = token();
          }
        );
      }
    ).catch(error => {
      console.log(error);
    });
  }

  getToken() {

    return firebase.auth().currentUser.getToken().then(token => {
      this.token = token;
    });
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

}
