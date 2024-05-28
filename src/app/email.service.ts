import { Injectable } from "@angular/core";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  private userID = "CGcqtqZ0HQxmpGMt4"; // Replace with your EmailJS user ID
  private serviceID = "service_k21ybzb"; // Replace with your EmailJS service ID
  private templateID = "template_a70osfw"; // Replace with your EmailJS template ID

  constructor() {}

  sendRegistrationEmail(
    email: string,
    username: string
  ): Promise<EmailJSResponseStatus> {
    const templateParams = {
      to_email: email,
      to_name: username,
      from_name: "Registration",
    };

    return emailjs.send(
      this.serviceID,
      this.templateID,
      templateParams,
      this.userID
    );
  }
}
