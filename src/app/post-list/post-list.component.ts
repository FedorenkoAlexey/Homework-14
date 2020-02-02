import { Component, OnInit, OnChanges, Input } from "@angular/core";
import { ApiService } from "../rest/api.service";
import { Post } from "../rest/post/post.model";
import { ShareService } from "../rest/share.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.html"
  // styleUrls: ["./post-list.css"]
})
export class PostListComponent implements OnInit {
  constructor(private api: ApiService, private share: ShareService) {
    this.share.getUser.subscribe((id: number) => (this.UserId = id));
  }
  @Input() posts: Post[];

  // post: Post;
  UserId: number;

  // getPosts(id: number): void {
  //   this.api.getPosts(id);
  //   this.post = this.api.posts;
  //   console.log("TS-post: ", this.post);
  // }

  ngOnInit() {}

  // ngOnChanges() {
  //   this.api.getPosts(this.UserId);
  //   console.log("post-list");
  // }
}
