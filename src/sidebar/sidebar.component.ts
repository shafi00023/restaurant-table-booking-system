import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
})
export class SidebarComponent {
  constructor(private router: Router) {}

  activeItem: string = "dashboard";

  @Output() changeActiveItem = new EventEmitter<string>();

  setActiveItem(item: string) {
    this.activeItem = item;
    this.changeActiveItem.emit(item);
    console.log(this.activeItem);
    this.router.navigate([`/${this.activeItem}`]);
  }
}
