import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PostListComponent } from "./post-list.component";
import { ApiService } from "../rest/api.service";
import { PostComponent } from "./post/post.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [PostListComponent, PostComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [PostListComponent],
  providers: [ApiService]
})
export class PostListModule {}
