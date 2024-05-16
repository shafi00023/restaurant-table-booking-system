import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss'
})
export class AdminSidebarComponent {
  activeItem: string = 'admin-dashboard'; 

  @Output() changeActiveItem = new EventEmitter<string>();

  setActiveItem(item: string) {
    this.activeItem = item; 
    this.changeActiveItem.emit(item); 
  }
}
