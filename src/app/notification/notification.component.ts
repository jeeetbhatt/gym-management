import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainService } from '../Services/main.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  message: string = "User Added Successfully!";
  isVisible: boolean = true;
  timer: any;

  constructor(mainService:MainService) {
    this.isVisible = mainService.isVisible;
    this.message = mainService.msg;
  }

  // ngOnInit() {
  //   // Automatically hide the notification after 10 seconds
  //   this.timer = setTimeout(() => {
  //     this.isVisible = false;
  //   }, 10000);
  // }

  // ngOnDestroy() {
  //   // Clear the timer when the component is destroyed
  //   if (this.timer) {
  //     clearTimeout(this.timer);
  //   }
  // }

}
