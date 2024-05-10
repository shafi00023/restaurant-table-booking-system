import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './core/api/register/api.service';
import { BookTableComponent } from '../book-table/book-table.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path:'dashboard', component: DashboardComponent},
    { path: 'booking-details/:id', component: BookTableComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes),BrowserModule ,HttpClientModule ],
    providers: [ApiService],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }