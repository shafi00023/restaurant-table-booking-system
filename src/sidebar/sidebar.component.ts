import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  activeItem: string = 'dashboard'; // Set the default active item

  @Output() changeActiveItem = new EventEmitter<string>();

  setActiveItem(item: string) {
    this.activeItem = item; // Update the active item when a navigation item is clicked
    this.changeActiveItem.emit(item); // Emit event to parent component
  }
}
