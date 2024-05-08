import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router,private http: HttpClient) { }
  register() {
      this.router.navigate(["/register"]);
  }
  email: string = '';
  password: string = '';
  errorMessage: string = '';


  login() {
    this.http.get<any[]>('/api/users').subscribe(
      (users) => {
        const user = users.find(u => u.email === this.email && u.password === this.password);
        if (user) {
          console.log('Login successful');
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

}
