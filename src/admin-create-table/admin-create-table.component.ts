import { Component } from "@angular/core";
// import { BookingService } from "../app/core/api/book-table/app.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../header/header.component";
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";

@Component({
  selector: "app-admin-create-table",
  standalone: true,
  imports: [FormsModule, CommonModule, AdminSidebarComponent, HeaderComponent],
  templateUrl: "./admin-create-table.component.html",
  styleUrl: "./admin-create-table.component.scss",
})
export class AdminCreateTableComponent {
  createtableData = {
    tableno: "",
    capacity: "",
  };

  clearInputs() {
    this.createtableData = {
      tableno: "",
      capacity: "",
    };
  }
}
