import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { PreviousBookingComponent } from '../previous-booking/previous-booking.component';
import { BookTableComponent } from '../book-table/book-table.component';
import { EditBookingComponent } from '../edit-booking/edit-booking.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent,CommonModule,PreviousBookingComponent ,BookTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  activeItem: string = 'dashboard'; 

  changeActiveItem(item: string) {
    this.activeItem = item; 
  }
}
