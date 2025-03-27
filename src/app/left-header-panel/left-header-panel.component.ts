import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-left-header-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-header-panel.component.html',
  styleUrl: './left-header-panel.component.scss'
})
export class LeftHeaderPanelComponent {

  @Input() activeItemId:number = 0;
  @Input() data:any[] = [];
  @Output() activeItemChanged = new EventEmitter<number>();

  setActiveItemId(id: number) {
    this.activeItemId = id;
    this.activeItemChanged.emit(id);
  } 

}
