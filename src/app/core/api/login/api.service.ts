import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/users'; 

  constructor(private http: HttpClient) {}

  loginUser(credentials: { email: string, password: string }) {
    return this.http.post<any>(this.apiUrl, credentials);
  }
}