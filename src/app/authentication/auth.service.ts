import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { _firebaseApi } from './authentication.module';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public auth: AngularFireAuth, private router: Router) {}

  redirectToDashboard() {
    this.router.navigate(['dashboard']);
  }
  redirectToLogin() {
    this.router.navigate(['login']);
  }
  userCreateEmailSignIn(email, password) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.redirectToDashboard())
      .catch(() => console.log('error'));
  }

  userEmailSignIn(email, password) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.redirectToDashboard())
      .catch(() => console.log('error'));
  }
  userGoogleLogin() {
    let provider = new _firebaseApi.auth.GoogleAuthProvider();
    return this.auth
      .signInWithPopup(provider)
      .then(() => {
        this.redirectToDashboard();
      })
      .catch(() => console.log('error'));
  }

  userGetslogout() {
    this.auth.signOut().then(() => this.redirectToLogin());
  }
}
