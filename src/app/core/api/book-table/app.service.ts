import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:3000/api/book-table';

  constructor(private http: HttpClient) { }

  bookTable(bookingData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, bookingData);
  }
}
