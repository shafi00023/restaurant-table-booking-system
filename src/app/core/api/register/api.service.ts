import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api/register'; 

  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post<any>(this.apiUrl, user);
  }
}
