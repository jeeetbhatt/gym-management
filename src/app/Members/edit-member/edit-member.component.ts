import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-member',
  standalone: true,
  imports: [JsonPipe,FormsModule,CommonModule],
  templateUrl: './edit-member.component.html',
  styleUrl: './edit-member.component.scss'
})
export class EditMemberComponent  {

  @Input() editMemberId:any = null;
  selectMemberMsg:string = "Go to Active Members > Press 'Edit' control button to edit a member.";
  editMemberData:any;
  @Output() allMembersBtnClicked = new EventEmitter();
  newExDate:any;
  noOfMonths:number = 0;

  constructor(public mainService:MainService) { }

  goToAllMembers() {
    this.allMembersBtnClicked.emit();
  }

  ngOnInit() {
    if (this.editMemberId || this.editMemberId != -1) {
      this.editMemberData = this.mainService.memberData.filter(member=>member.id == this.editMemberId)[0];
    }
  }

  getTrainers(): any[] {
    return this.mainService.staffData.filter((staff)=>staff.position === 'Trainer');
  }

  editMemberFormSubmitted(form:any) {
    console.log(form.value);
  }

  subscriptionUpdated() {
    this.newExDate = new Date(this.editMemberData.subscriptionEndDate);
    this.newExDate.setMonth(this.newExDate.getMonth() + this.noOfMonths);
    this.newExDate  = this.newExDate.toISOString().split('T')[0];
  }
}
