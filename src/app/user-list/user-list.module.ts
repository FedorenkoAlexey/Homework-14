import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UserListComponent } from "./user-list.component";
import { ApiService } from "../rest/api.service";
import { UserComponent } from "./user/user.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [UserListComponent],
  providers: [ApiService]
})
export class UserListModule {}
