import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  activeItem: string = 'dashboard'; 

  @Output() changeActiveItem = new EventEmitter<string>();

  setActiveItem(item: string) {
    this.activeItem = item; 
    this.changeActiveItem.emit(item); 
  }
}
