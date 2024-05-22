import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class BookingService {
  private apiUrl = "http://localhost:3000/api/book-table";
  private bookingURL = "http://localhost:3000/api/getBooking";
  private editBookingURL = "http://localhost:3000/api/bookings";
  private createTableURL = "http://localhost:3000/api/createTable";
  private checkAvailabilityURL = "http://localhost:3000/api/checkAvailability";

  constructor(private http: HttpClient) {}

  bookTable(bookingData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, bookingData);
  }

  getAllBooking(): Observable<any[]> {
    return this.http.get<any[]>(this.bookingURL);
  }
  updateBooking(bookingId: string, updatedBooking: any): Observable<any> {
    return this.http.put<any>(
      `${this.editBookingURL}/${bookingId}`,
      updatedBooking
    );
  }

  createTable(createtableData: any): Observable<any> {
    return this.http.post<any>(this.createTableURL, createtableData);
  }

  getBookingById(bookingId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${bookingId}`);
  }

  // checkAvailability(bookingData: any): Observable<string[]> {
  //   return this.http.get<string[]>(this.checkAvailabilityURL, bookingData);
  // }
  checkAvailability(
    date: string,
    time: string,
    partySize: number
  ): Observable<any> {
    let params = new HttpParams()
      .set("date", date)
      .set("time", time)
      .set("partySize", partySize.toString());
      return this.http.get<number[]>(this.checkAvailabilityURL, { params });
  }
}
