import { Component, OnInit } from "@angular/core";
import { ApiService } from "../rest/api.service";
import { User } from "../rest/user/user.model";
import { Post } from "../rest/post/post.model";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.html"
  // styleUrls: ["./user-list.css"]
})
export class UserListComponent implements OnInit {
  constructor(private api: ApiService) {}

  users: User;
  posts: Post;

  getUsers(): void {
    this.api.getUsers();
    this.users = this.api.users;
    // console.log("TS: ", this.users);
  }

  ngOnInit() {
    this.api.getUsers();
  }

  getPost(id: any) {
    this.api.getPosts(id).subscribe((posts: Post) => {
      this.posts = posts;
      console.log("RP-36: ", posts);
    });
  }
}
