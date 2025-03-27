import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-add-staff-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-staff-modal.component.html',
  styleUrl: './add-staff-modal.component.scss'
})
export class AddStaffModalComponent {

  constructor(public mainService:MainService) {}
  
  @Output() modalCloseEvent = new EventEmitter();


  onSubmit(form:any) {
    this.mainService.registerStaff(form.form.value);
    this.modalCloseEvent.emit();
  }

  closeModal() {
    this.modalCloseEvent.emit();
  }
}
