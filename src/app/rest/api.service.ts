import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user/user.model";
import { Post } from "./post/post.model"

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private USER_URL = "https://jsonplaceholder.typicode.com/users";
  private POST_URL = "https://jsonplaceholder.typicode.com/posts?userId=1";
  users: User;
  posts: Post;
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.USER_URL).subscribe((response: User) => {
      this.users = response;
      // console.log(this.users);
    });
  }

  getPosts() {
    return this.http.get(this.POST_URL).subscribe((response: Post) => {
      this.posts = response;
      // console.log(this.posts);
    });
  }
}
