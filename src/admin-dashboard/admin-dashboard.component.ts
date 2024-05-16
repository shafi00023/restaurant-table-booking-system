import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from "@angular/common";
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { AdminMainComponent } from "../admin-main/admin-main.component";
import { AdminViewBookingsComponent } from "../admin-view-bookings/admin-view-bookings.component";
import { AdminCreateTableComponent } from "../admin-create-table/admin-create-table.component";

@Component({
  selector: "app-admin-dashboard",
  standalone: true,
  imports: [
    HeaderComponent,
    AdminSidebarComponent,
    CommonModule,
    AdminMainComponent,
    AdminViewBookingsComponent,
    AdminCreateTableComponent,
  ],
  templateUrl: "./admin-dashboard.component.html",
  styleUrl: "./admin-dashboard.component.scss",
})
export class AdminDashboardComponent {
  activeItem: string = "admindashboard";

  changeActiveItem(item: string) {
    this.activeItem = item;
  }
}
