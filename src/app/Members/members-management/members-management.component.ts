import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { LeftHeaderPanelComponent } from "../../left-header-panel/left-header-panel.component";
import { AllMembersListingComponent } from "../all-members-listing/all-members-listing.component";
import { RegisterMemberComponent } from "../register-member/register-member.component";
import { MainService } from '../../Services/main.service';
import { EditMemberComponent } from "../edit-member/edit-member.component";

@Component({
  selector: 'app-members-management',
  standalone: true,
  imports: [LeftHeaderPanelComponent, AllMembersListingComponent, RegisterMemberComponent, EditMemberComponent],
  templateUrl: './members-management.component.html',
  styleUrl: './members-management.component.scss'
})
export class MembersManagementComponent implements OnDestroy {

  @Output() backBtn = new EventEmitter();

  activeItemId = 0;
  leftData:any[] = [];
  editMemberId:number = -1;

  constructor(mainService:MainService) { 
    this.leftData = mainService.leftData;
  }

  ngOnDestroy() {
    this.editMemberId = -1
  }

  setActiveItemId(id: number) {
    this.activeItemId = id;
  }

  back() {
    this.backBtn.emit();
  }

  initEditUser(memberId:number) {
    this.editMemberId = memberId;
    this.setActiveItemId(3);
  }

}
