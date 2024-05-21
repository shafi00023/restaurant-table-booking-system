import { Component } from "@angular/core";
import { BookingService } from "../app/core/api/book-table/app.service";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-main",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./admin-main.component.html",
  styleUrl: "./admin-main.component.scss",
})
export class AdminMainComponent {
  bookingData: any[] = [];
  todayCount: number = 0;
  weeklyCount: number = 0;
  monthlyCount: number = 0;

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.loadBookingData();
  }
  editBooking(bookingId: any) {
    console.log("edit booking clicked for booking id", bookingId);
    this.router.navigate(["/booking-details", bookingId]);
  }

  // loadBookingData() {
  //   this.bookingService.getAllBooking().subscribe(
  //     (data) => {
  //       this.bookingData = data;
  //     },
  //     (error) => {
  //       console.error("Failed to fetch booking data:", error);
  //     }
  //   );
  // }
  loadBookingData() {
    this.bookingService.getAllBooking().subscribe(
      (data: any[]) => {
        this.bookingData = data;
        this.calculateCounts();
      },
      (error: any) => {
        console.error("Failed to fetch booking data:", error);
      }
    );
  }
  calculateCounts() {
    const today = new Date();
    const startOfWeek = this.getStartOfWeek(today);
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    this.todayCount = this.bookingData.filter((booking) =>
      this.isSameDay(new Date(booking.date), today)
    ).length;

    this.weeklyCount = this.bookingData.filter(
      (booking) =>
        new Date(booking.date) >= startOfWeek && new Date(booking.date) <= today
    ).length;

    this.monthlyCount = this.bookingData.filter(
      (booking) =>
        new Date(booking.date) >= startOfMonth &&
        new Date(booking.date) <= today
    ).length;
  }
  isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  getStartOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(date.setDate(diff));
  }
}
