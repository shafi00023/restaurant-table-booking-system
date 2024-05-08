import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../app/core/api/register/api.service";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


@Component({
  selector: "app-register",
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  user = { username: '', email: '', password: '', contact: '' };
  message: string = '';

  constructor(private router: Router, private apiService: ApiService) {} 

  registerUser() {
    this.apiService.registerUser(this.user).subscribe(
      response => {
        this.message = response.message;
        alert("user created successfully...!!")
        this.clearInputs();
      },
      error => {
        this.message = error.error.error;
      }
    );
  }

  login() {
    this.router.navigate(["/login"]);
  }
  clearInputs() {
    this.user = { username: '', email: '', password: '', contact: '' };
  }
}