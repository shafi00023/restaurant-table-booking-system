import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path:'dashboard', component: DashboardComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes),BrowserModule ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }