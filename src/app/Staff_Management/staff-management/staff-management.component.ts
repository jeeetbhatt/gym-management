import { Component, EventEmitter, Output } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { StaffCardComponent } from "../staff-card/staff-card.component";
import { EditStaffModalComponent } from "../edit-staff-modal/edit-staff-modal.component";
import { AddStaffModalComponent } from '../add-staff-modal/add-staff-modal.component';

@Component({
  selector: 'app-staff-management',
  standalone: true,
  imports: [StaffCardComponent, EditStaffModalComponent,AddStaffModalComponent],
  templateUrl: './staff-management.component.html',
  styleUrl: './staff-management.component.scss'
})
export class StaffManagementComponent {

  @Output() backBtn = new EventEmitter();
  isEditModalVisible:boolean = false;
  isCreateModalVisible:boolean = false;

  staffData:any = [];
  trainerData:any;

  constructor (mainService:MainService) {
    this.staffData = mainService.staffData;
  }

  back() {
    this.backBtn.emit();
  }

  deleteTrainer(index:number) {
    this.staffData.splice(index,1);
  }

  toggleEditModal(trainerData:any) {
    this.isEditModalVisible = !this.isEditModalVisible;
    this.trainerData = trainerData;  
  }

  toggleCreateModal() {
    this.isCreateModalVisible = !this.isCreateModalVisible;
  }
}
