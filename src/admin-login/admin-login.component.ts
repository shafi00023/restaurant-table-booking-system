import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../app/core/api/login/api.service";

@Component({
  selector: "app-login",
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

  adminlogin() {
    // Call the login service
    // this.loginService;
    this.router.navigate(["/adminlogin"]);
    //   .loginUser({ email: this.email, password: this.password })
    //   .subscribe(
    //     (response) => {
    //       // Handle successful login
    //       console.log(response); // or navigate to another page
    //       this.router.navigate(["/dashboard"]);
    //     },
    //     (error) => {
    //       // Handle login error
    //       this.errorMessage = error.error.message;
    //       console.log(error.error);
    //       alert(JSON.stringify(error.error));
    //     }
    //   );
  }
}
