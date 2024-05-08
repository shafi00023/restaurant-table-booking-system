import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {  LoginService } from '../app/core/api/login/api.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router, private loginService: LoginService) { }
  
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  register(){
    this.router.navigate(['/register']);
  }

  login() {
    // Call the login service
    this.loginService.loginUser({ email: this.email, password: this.password })
      .subscribe(
        response => {
          // Handle successful login
          console.log(response); // or navigate to another page
          this.router.navigate(['/dashboard']);
        },
        error => {
          // Handle login error
          this.errorMessage = error.error.message;
          console.log(error.error);
          alert(JSON.stringify(error.error));

        }
      );
  }

}
