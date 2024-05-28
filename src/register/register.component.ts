import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../app/core/api/register/api.service";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { EmailService } from "../app/email.service";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  user = { username: "", email: "", password: "", contact: "" };
  message: string = "";

  constructor(
    private router: Router,
    private apiService: ApiService,
    private emailService: EmailService
  ) {}

  registerUser() {
    this.apiService.registerUser(this.user).subscribe(
      (response) => {
        console.log(response)
        this.message = response.message;
        this.emailService
          .sendRegistrationEmail(this.user.email, this.user.username)
          .then(() => {
            alert("User created successfully and an email has been sent!");
          })
          .catch((error: any) => {
            console.error("Failed to send email:", error);
            alert("User created successfully but failed to send the email.");
          });
        this.clearInputs();
      },
      (error) => {
        this.message = error.error.error;
      }
    );
  }

  login() {
    this.router.navigate(["/login"]);
  }

  clearInputs() {
    this.user = { username: "", email: "", password: "", contact: "" };
  }
}
