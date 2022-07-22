import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../user-management.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public ums: UserManagementService) {}
  profileName =this.ums.currentUser.displayName || this.ums.currentUser.email;
  ngOnInit(): void { }

}
