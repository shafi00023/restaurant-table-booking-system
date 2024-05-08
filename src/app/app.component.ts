import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { ApiService } from "./core/api/register/api.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    RouterLink,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  providers: [ApiService],
})
export class AppComponent {
  title = "restaurant-table-booking-system";
}
