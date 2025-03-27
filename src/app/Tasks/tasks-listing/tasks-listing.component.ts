import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { CommonModule } from '@angular/common';
import { AddEditTaskComponent } from "../add-edit-task/add-edit-task.component";

@Component({
  selector: 'app-tasks-listing',
  standalone: true,
  imports: [CommonModule, AddEditTaskComponent],
  templateUrl: './tasks-listing.component.html',
  styleUrl: './tasks-listing.component.scss'
})
export class TasksListingComponent {

  taskData: any[] = [];
  isEditMode:boolean = false;
  @Input() filterPending: boolean = false;
  @Input() filterCompleted: boolean = false;
  @Output() editTaskClicked:any = new EventEmitter();

  constructor(mainService: MainService) {
    this.taskData = mainService.taskData;
  }

  ngOnInit() {
    if (this.filterPending) {
      this.taskData = this.taskData.filter(task=>task.status === 'Pending');
    }
    if (this.filterCompleted) {
      this.taskData = this.taskData.filter(task=>task.status === 'Completed');
    }
  }

  changeStatus(taskId: any) { 
    this.taskData.forEach((task:any) => {
      if (task.id === taskId) {
        task.status = task.status == "Completed" ? 'Pending' : 'Completed';
      }
    });
  }

  editTask(taskId:number) {
    console.log(taskId);
    this.editTaskClicked.emit(taskId);
  }
}
