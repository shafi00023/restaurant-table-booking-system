import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
// import { LoginComponent } from "./login/login.component";
// import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "/login", pathMatch: "full" }, // Redirect to login page by default
      { path: "**", redirectTo: "/login", pathMatch: "full" } // Redirect to login page for any other invalid route
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
