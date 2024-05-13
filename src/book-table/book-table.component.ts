import { Component } from "@angular/core";
import { BookingService } from "../app/core/api/book-table/app.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-book-table",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./book-table.component.html",
  styleUrl: "./book-table.component.scss",
})
export class BookTableComponent {
  bookingData = {
    name: "",
    email: "",
    date: "",
    time: "",
    partySize: "",
  };

  constructor(private bookingService: BookingService) {}

  onSubmit() {
    this.bookingService.bookTable(this.bookingData).subscribe(
      (data) => {
        alert("Table booked successfully");
        this.clearInputs();
      },
      (error) => {
        console.error("Failed to book table:", error);
      }
    );
  }
  clearInputs() {
    this.bookingData = {
      name: "",
      email: "",
      date: "",
      time: "",
      partySize: "",
    };
  }
}
