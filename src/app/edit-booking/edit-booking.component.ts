import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../core/api/book-table/app.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { BookingService } from '../app/core/api/book-table/app.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss'],
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class EditBookingComponent implements OnInit {
  bookingDetails: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookingDetails = JSON.parse(params['booking']);
      console.log('Booking Details:', this.bookingDetails);
    });
  }

  updateBooking() {
    // Implement the update logic here
  }
}
