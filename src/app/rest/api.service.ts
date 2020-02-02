import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private USER_URL = "https://jsonplaceholder.typicode.com/users";
  private POST_URL = "https://jsonplaceholder.typicode.com/posts?userId=1";
  users: any;
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.USER_URL).subscribe(response => {
      this.users = response;
      // console.log(this.users);
    });
  }
}
