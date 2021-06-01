import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from './authentication/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  currentUser: firebase.User = null;
  userLoggedIn: Observable<firebase.User> = null;
  userInDashBoard: boolean = false;

  constructor(public authInfo: AuthService) {
    this.userLoggedIn = authInfo.auth.authState;
    authInfo.auth.authState.subscribe((data) => {
      this.currentUser = data;
    });
  }

  setUserName(username: string) {
    
    this.currentUser.displayName = username;
    return username;
  }
}

