import { Component } from "@angular/core";
import { BookingService } from "../app/core/api/book-table/app.service";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-view-bookings",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./admin-view-bookings.component.html",
  styleUrl: "./admin-view-bookings.component.scss",
})
export class AdminViewBookingsComponent {
  bookingData: any;

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.loadBookingData();
  }
  editBooking(bookingId: any) {
    console.log("edit booking clicked for booking id", bookingId);
    this.router.navigate(["/booking-details", bookingId]);
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
}
