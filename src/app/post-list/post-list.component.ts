import { Component, OnInit } from "@angular/core";
import { ApiService } from "../rest/api.service";
import { Post } from "../rest/post/post.model";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.html"
  // styleUrls: ["./post-list.css"]
})
export class PostListComponent implements OnInit {
  constructor(private api: ApiService) {}

  post: Post;

  getPosts(): void {
    this.api.getUsers();
    this.post = this.api.posts;
    console.log("TS-post: ", this.post);
  }

  ngOnInit() {
    this.api.getPosts();
  }
}
