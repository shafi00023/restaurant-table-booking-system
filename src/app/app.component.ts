import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { ApiService } from "./core/api/register/api.service";
import { FormsModule } from "@angular/forms";
import { AdminLoginComponent } from "../admin-login/admin-login.component";
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";
import { AdminMainComponent } from "../admin-main/admin-main.component";
import { AdminViewBookingsComponent } from "../admin-view-bookings/admin-view-bookings.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    RouterLink,
    FormsModule,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminMainComponent,
    AdminViewBookingsComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  providers: [ApiService],
})
export class AppComponent {
  title = "restaurant-table-booking-system";
}
