import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-staff-card',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './staff-card.component.html',
  styleUrl: './staff-card.component.scss'
})
export class StaffCardComponent {

  @Input() staffData:any;
  @Output() deleteTrainerEvent = new EventEmitter();
  @Output() editClickEvent = new EventEmitter();

  deleteTrainer(index:number) {
    this.deleteTrainerEvent.emit(index);
  }

  editTrainer() {
    this.editClickEvent.emit(this.staffData);
  }

}
