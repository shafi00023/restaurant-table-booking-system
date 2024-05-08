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
  constructor(private router: Router, private http: HttpClient,private loginService: LoginService) { }
  
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  register(){
    this.router.navigate(['/register']);
  }

  login(): void {
    this.loginService.loginUser({ email: this.email, password: this.password }).subscribe(
      (response) => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    );
  }
}
