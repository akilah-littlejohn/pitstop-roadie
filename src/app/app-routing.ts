import {
  Routes,
  RouterModule
} from '@angular/router';
import { NgModule } from '@angular/core';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const redirectUnauthorizedToHomePage = () => redirectUnauthorizedTo(['']);


const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHomePage },
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)],
    exports: [RouterModule]


})

export class AppRpoutingModule { }
export const routingComponents = [DashboardComponent, HomeComponent, LoginComponent];