import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../Services/main.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-member',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register-member.component.html',
  styleUrl: './register-member.component.scss'
})
export class RegisterMemberComponent {

  addMultiple:boolean = false;
  numberOfMembers:number = 1;
  subscriptionMonth:number = 1;
  subscriptionStartDate:any = new Date();
  subscriptionEndDate:any = new Date();

  constructor(public mainService:MainService) { }

  getTrainers(): any[] {
      return this.mainService.staffData.filter((staff)=>staff.position === 'Trainer');
  }

  registerMultipleMembers() {
    
  }

  registerSingleMember(form:any) {
    console.log(form.form.value);
    this.mainService.registerMember(form.form.value);
    form.reset();
  }

  subscriptionSelected() {
    let temp = new Date(this.subscriptionStartDate);
    temp.setMonth(temp.getMonth() + this.subscriptionMonth);  
    this.subscriptionEndDate = temp.toISOString().split('T')[0];
  }

}
