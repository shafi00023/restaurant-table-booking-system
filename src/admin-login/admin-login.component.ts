import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../app/core/api/login/api.service";

@Component({
  selector: "app-admin-login",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./admin-login.component.html",
  styleUrl: "./admin-login.component.scss",
})
export class AdminLoginComponent {
  constructor(private router: Router, private loginService: LoginService) {}

  email: string = "";
  password: string = "";
  errorMessage: string = "";
  register() {
    this.router.navigate(["/register"]);
  }
  admindashboard() {
    this.router.navigate(["/admindashboard"]);
  }
  adminmain() {
    this.router.navigate(["/adminmain"]);
  }
  adminviewbookings() {
    this.router.navigate(["/adminviewbookings"]);
  }
}
