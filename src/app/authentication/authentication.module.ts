import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import firebase from 'firebase/app';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],

  exports: [AngularFireModule, AngularFirestoreModule],
})
export class AuthenticationModule {
  constructor() {}
}

export const _firebaseApi = firebase;
