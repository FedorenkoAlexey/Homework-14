import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Post } from "../../rest/post/post.model";

@Component({
  selector: "app-post",
  templateUrl: "./post.html"
  // styleUrls: ['./post.css']
})
export class PostComponent {
  constructor() {}

  @Input() post: Post;
}
