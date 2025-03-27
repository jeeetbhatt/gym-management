import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../Services/main.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-task',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-edit-task.component.html',
  styleUrl: './add-edit-task.component.scss'
})
export class AddEditTaskComponent {

  constructor(public mainService:MainService) { }

  @Input() editTaskId:number = -1;
  @Input() editTaskData:any;
  @Output() closeEdit:any = new EventEmitter();

  ngOnInit() {
      this.editTaskData = this.editTaskId != -1 ? this.mainService.taskData.filter(task=>task.id === this.editTaskId)[0]: {
        "taskDesc": null,
        "dueDate": null,
        "highPriority": null,
        "status": null
    };
  }

  closeEditMode() {
    if (this.editTaskId == -1) {
      this.closeEdit.emit(0); // 0 - Move to All Tasks Listing
      return;
    }
    this.closeEdit.emit(1); // 1 - Change to Add Task
    Object.keys(this.editTaskData).forEach((key)=> {
      this.editTaskData[key] = null;
    });
  }

  onSubmit(form:any) {
    this.mainService.addTask({...form.value,creationDate:new Date().toLocaleDateString()});
    form.reset();
    this.editTaskId = -1;
    this.closeEditMode();
  }
}
