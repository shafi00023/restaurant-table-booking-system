import { Component } from '@angular/core';
import { BookingService } from '../app/core/api/book-table/app.service';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.scss'
})
export class BookTableComponent {
  bookingForm!: FormGroup;
  bookingId!: string ;
  bookingData: any;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookingId = params['id'];
      this.loadBookingData(this.bookingId);
    });

    this.bookingForm = this.formBuilder.group({
      name: [''],
      email: [''],
      date: [''],
      time: [''],
      partySize: ['']
    });
  }

  loadBookingData(bookingId: string) {
    this.bookingService.getBookingById(bookingId).subscribe(
      data => {
        this.bookingData = data; 
        this.bookingForm.patchValue(data); // Populate form fields with booking data
      },
      error => {
        console.error('Failed to fetch booking details:', error);
      }
    );
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const updatedBooking = this.bookingForm.value;
      this.bookingService.updateBooking(this.bookingId, updatedBooking)
        .subscribe(
          () => {
            alert('Booking updated successfully');
            // Perform any additional actions after successful update
          },
          error => {
            console.error('Failed to update booking:', error);
            // Handle error
          }
        );
    }
  }
}
