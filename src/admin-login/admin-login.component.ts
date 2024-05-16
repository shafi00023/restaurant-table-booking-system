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
    if (this.email === "admin@gmail.com" && this.password === "admin") {
      this.router.navigate(["/admindashboard"]);
    } else {
      return alert("Invalid email or password");
    }
  }
  adminmain() {
    this.router.navigate(["/adminmain"]);
  }
  adminviewbookings() {
    this.router.navigate(["/adminviewbookings"]);
  }
  admincreatetable() {
    this.router.navigate(["/admincreatetable"]);
  }
}
