import { Component, OnInit } from "@angular/core";
import { ApiService } from "../rest/api.service";
import { from } from "rxjs";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.html"
  // styleUrls: ["./user-list.css"]
})
export class UserListComponent implements OnInit {
  constructor(private api: ApiService) {}

  users: any;

  getUsers(): void {
    this.api.getUsers();
    this.users = this.api.users;
    console.log("TS: ", this.users.name);
  }

  ngOnInit() {
    this.api.getUsers();
  }
}
