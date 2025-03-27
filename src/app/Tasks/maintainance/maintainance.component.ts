import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { LeftHeaderPanelComponent } from "../../left-header-panel/left-header-panel.component";
import { MainService } from '../../Services/main.service';
import { AddEditTaskComponent } from "../add-edit-task/add-edit-task.component";
import { TasksListingComponent } from "../tasks-listing/tasks-listing.component";

@Component({
  selector: 'app-maintainance',
  standalone: true,
  imports: [LeftHeaderPanelComponent, AddEditTaskComponent, TasksListingComponent],
  templateUrl: './maintainance.component.html',
  styleUrl: './maintainance.component.scss'
})
export class MaintainanceComponent {

  @Output() backBtn:any = new EventEmitter();
  @ViewChild(AddEditTaskComponent) addEditTaskComponent:any;
  leftPanelData:any[] = [];
  activeItemId:number = 0;
  editTaskId:number = -1;

  constructor(mainService:MainService) {
    this.leftPanelData = mainService.leftDataMaintainanceTask;
  }
  

  back() {
    this.backBtn.emit();
  }

  setActiveId(id:number) {
    this.activeItemId = id;
  }

  initEditMode(taskId:any) {
    console.log(taskId);
    this.editTaskId = taskId;
    this.setActiveId(3);
  }

  closeEditMode(param:any) {
    if (!param) {
      this.setActiveId(0);
      return;
    }
    this.editTaskId = -1;
  }

}
