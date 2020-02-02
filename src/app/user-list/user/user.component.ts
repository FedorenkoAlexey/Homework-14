import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../../rest/user/user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.html"
  // styleUrls: ['./user.css']
})
export class UserComponent {
  constructor() {}

  @Input() user: User;
  @Output() getId: EventEmitter<User> = new EventEmitter<User>();

  getUserId() {
    this.getId.emit();
  }
}
