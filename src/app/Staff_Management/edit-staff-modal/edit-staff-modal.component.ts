import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-edit-staff-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-staff-modal.component.html',
  styleUrl: './edit-staff-modal.component.scss'
})
export class EditStaffModalComponent {

  @Input() trainerData: any;
  @Output() modalCloseEvent = new EventEmitter();
  userData: any;

  constructor(public mainService:MainService) {}

  ngOnInit() {
    this.userData = JSON.parse(JSON.stringify(this.trainerData));
  }

  closeModal() {
    this.modalCloseEvent.emit();
  }

  onSubmit(form: any) {
    this.mainService.editStaffData(this.userData);
    this.modalCloseEvent.emit();
  }

}
