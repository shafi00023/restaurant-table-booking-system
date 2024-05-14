import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './core/api/register/api.service';
// import { BookTableComponent } from '../book-table/book-table.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path:'dashboard', component: DashboardComponent},
    { path: 'edit-booking', component: EditBookingComponent },
    { path: "adminlogin", component: AdminLoginComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes),BrowserModule ,HttpClientModule ],
    providers: [ApiService],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
