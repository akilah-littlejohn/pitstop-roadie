import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../user-management.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public ums: UserManagementService) {}

  ngOnInit(): void { }

}
