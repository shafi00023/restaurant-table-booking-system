import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  constructor(private router: Router) {}
  login() {
    this.router.navigate(["/login"]);
  }
}
