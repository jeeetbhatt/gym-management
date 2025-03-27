import { Component } from '@angular/core';
import { StaffManagementComponent } from "./Staff_Management/staff-management/staff-management.component";
import { MembersManagementComponent } from './Members/members-management/members-management.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { MaintainanceComponent } from './Tasks/maintainance/maintainance.component';
import { NotificationComponent } from "./notification/notification.component";
import { MainService } from './Services/main.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StaffManagementComponent, MembersManagementComponent, MaintainanceComponent, CommonModule, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(mainService:MainService) {
    mainService.showNotification("JJJ");
  }

  title = 'be-fit-the-gym';
  selectedManagement:number = 1;

  selectManagement(blockCode:number) {
    this.selectedManagement = blockCode;
  }
}
