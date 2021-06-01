import { Component } from '@angular/core';
import { AuthService } from './authentication/auth.service';
import { UserManagementService } from './user-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public af:AuthService, public usm:UserManagementService) {
    
  }

  

} 