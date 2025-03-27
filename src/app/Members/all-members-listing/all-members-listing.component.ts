import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../Services/main.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-members-listing',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './all-members-listing.component.html',
  styleUrl: './all-members-listing.component.scss'
})
export class AllMembersListingComponent {

  @Input() filterFormer: any = false;
  @Output() editButtonClicked:any = new EventEmitter();
  searchMemberKey: string = '';
  allMembers: any[] = [];
  filterLevel: any = "";
  filterGoal: any = "";


  constructor(public mainService: MainService) {
    this.allMembers = this.mainService.memberData;
  }

  ngOnInit() {
    if (this.filterFormer) {
      this.allMembers=this.mainService.memberData.filter(member => member.hasLeftGym == true)
    } else {
      this.allMembers=this.mainService.memberData.filter(member => member.hasLeftGym == false)
    }
  } 

  searchMembers() {
    let trimmedSearchKey = this.searchMemberKey.trim().toLowerCase();
    this.allMembers = this.allMembers.filter((member) => {
      return member.name.toLowerCase().includes(trimmedSearchKey) || member.contactNumber.toString().includes(trimmedSearchKey) || member.address.toLowerCase().includes(trimmedSearchKey) || member.remarks.toLowerCase().includes(trimmedSearchKey) || member.paymentRemark.toLowerCase().includes(trimmedSearchKey)
    });
  }

  filterMembers() {
    this.filterLevel = "";
    this.allMembers = this.mainService.memberData.filter((member) => {
      if (this.filterGoal) {
        return member.physiqueGoal.toLowerCase().includes(this.filterGoal.toLowerCase());
      }

      return true;
    });
  }

  filterByLevel() {
    this.filterGoal = "";
    this.allMembers = this.mainService.memberData.filter((member) => {
      if (this.filterLevel) {
        return member.expertiseLevel.toLowerCase().includes(this.filterLevel.toLowerCase());
      }

      return true;
    });
  }

  editMember(memberId:number) {
    this.editButtonClicked.emit(memberId);
  }

  deactivateMember(id:number) {
    this.mainService.formerMember(id,null);
  }
}
