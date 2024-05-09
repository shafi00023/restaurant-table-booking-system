import { Component } from '@angular/core';
import { BookingService } from '../app/core/api/book-table/app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-previous-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './previous-booking.component.html',
  styleUrl: './previous-booking.component.scss'
})
export class PreviousBookingComponent {
  bookingData: any;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.loadBookingData();
  }

  loadBookingData() {
    this.bookingService.getAllBooking().subscribe(
      data => {
        this.bookingData = data;
      },
      error => {
        console.error('Failed to fetch booking data:', error);
      }
    );
  }
}
