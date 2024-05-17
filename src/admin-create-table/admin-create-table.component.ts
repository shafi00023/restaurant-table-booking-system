import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../header/header.component";
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { BookingService } from "../app/core/api/book-table/app.service";

@Component({
  selector: "app-admin-create-table",
  standalone: true,
  imports: [FormsModule, CommonModule, AdminSidebarComponent, HeaderComponent],
  templateUrl: "./admin-create-table.component.html",
  styleUrl: "./admin-create-table.component.scss",
})
export class AdminCreateTableComponent {
  createtableData = {
    tableNo: "",
    capacity: "",
  };

  constructor(private bookingService: BookingService) {}

  onSubmit() {
    this.bookingService.createTable(this.createtableData).subscribe(
      (data) => {
        alert("Table created successfully");
        this.clearInputs();
      },
      (error) => {
        console.error("Failed to create table:", error);
      }
    );
  }

  clearInputs() {
    this.createtableData = {
      tableNo: "",
      capacity: "",
    };
  }
}
