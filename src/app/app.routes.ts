import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./core/api/register/api.service";
// import { BookTableComponent } from '../book-table/book-table.component';
import { EditBookingComponent } from "../edit-booking/edit-booking.component";
import { AdminLoginComponent } from "../admin-login/admin-login.component";
import { BookTableComponent } from "../book-table/book-table.component";
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";
import { AdminMainComponent } from "../admin-main/admin-main.component";
import { AdminViewBookingsComponent } from "../admin-view-bookings/admin-view-bookings.component";

export const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "bookTable", component: BookTableComponent },
  { path: "edit-booking", component: EditBookingComponent },
  { path: "adminlogin", component: AdminLoginComponent },
  { path: "admindashboard", component: AdminDashboardComponent },
  { path: "adminmain", component: AdminMainComponent },
  { path: "adminviewbookings", component: AdminViewBookingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule],
  providers: [ApiService],
  exports: [RouterModule],
})
export class AppRoutingModule {}
