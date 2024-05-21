import { Component } from "@angular/core";
import { BookingService } from "../app/core/api/book-table/app.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";
interface BookingData {
  name: string;
  email: string;
  date: string;
  time: string;
  partySize: number;
}

@Component({
  selector: "app-book-table",
  standalone: true,
  imports: [FormsModule, CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: "./book-table.component.html",
  styleUrl: "./book-table.component.scss",
})
export class BookTableComponent {
  bookingData: BookingData = {
    name: "",
    email: "",
    date: "",
    time: "",
    partySize: 0,
  };
  availableTables: number[] = [];
  selectedTable: string | null = null;
  constructor(private bookingService: BookingService) {}

  // checkAvailability(): void {
  //   if (this.bookingData.date && this.bookingData.time && this.bookingData.partySize > 0) {
  //     console.log("availableTables",this.availableTables);
  //     this.bookingService.checkAvailability(this.bookingData).subscribe(tables => {
  //       this.availableTables = tables;
  //     });
  //   }
  // }
  checkAvailability(): void {
    const { date, time, partySize } = this.bookingData;
    this.bookingService.checkAvailability(date, time, partySize).subscribe(
      (tables: number[]) => {
        this.availableTables = tables;
      },
      (error) => {
        console.error("Failed to check availability:", error);
      }
    );
  }

  onSubmit(): void {
    if (this.selectedTable) {
      const bookingDataWithTable = {
        ...this.bookingData,
        tableNo: this.selectedTable,
      };
      this.bookingService
        .bookTable(bookingDataWithTable)
        .subscribe((response) => {
          alert("Booking confirmed!");
        });
    } else {
      alert("Please select a table before booking.");
    }
  }
  clearInputs() {
    this.bookingData = {
      name: "",
      email: "",
      date: "",
      time: "",
      partySize: 0,
    };
  }
}
