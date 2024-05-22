import { Component } from "@angular/core";
import { BookingService } from "../app/core/api/book-table/app.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-admin-view-bookings",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./admin-view-bookings.component.html",
  styleUrl: "./admin-view-bookings.component.scss",
})
export class AdminViewBookingsComponent {
  bookingData: any;
  bookingDetails: any;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadBookingData();
  }

  loadBookingData() {
    this.bookingService.getAllBooking().subscribe(
      (data) => {
        this.bookingData = data;
      },
      (error) => {
        console.error("Failed to fetch booking data:", error);
      }
    );
  }

  confirm(booking: any) {
    booking.bookingStatus = "Confirmed";
    this.bookingService
      .updateBooking(booking.bookingId, booking)
      .subscribe((updatedBooking) => {
        alert("Booking confirmed");
      });
  }

  cancel(booking: any) {
    booking.bookingStatus = "Canceled";
    this.bookingService
      .updateBooking(booking.bookingId, booking)
      .subscribe((updatedBooking) => {
        alert("Booking cancelled");
      });
  }
}
