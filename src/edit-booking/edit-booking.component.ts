import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../app/core/api/book-table/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss'],
  imports: [FormsModule, CommonModule, SidebarComponent, HeaderComponent,],
  standalone: true,
})
export class EditBookingComponent implements OnInit {
  bookingDetails: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookingDetails = JSON.parse(params['booking']);
    });
  }

  updateBooking(): void {
    this.bookingService.updateBooking(this.bookingDetails.bookingId, this.bookingDetails)
      .pipe(
        catchError(error => {
          console.error('Failed to update booking:', error);
          this.snackBar.open('Failed to update booking', 'Close', {
            duration: 3000
          });
          return throwError(error);
        })
      )
      .subscribe(updatedBooking => {
        console.log('Booking updated successfully:', updatedBooking);
        // this.snackBar.open('Booking updated successfully', 'Close', {
        //   duration: 3000
        // });
        // Optionally, navigate to another route after successful update
        this.router.navigate(['dashboard']);
        alert('Update Succefull')
      });
  }
}
