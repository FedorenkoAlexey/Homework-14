import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UserListComponent } from "./user-list.component";
import { ApiService } from "../rest/api.service";
import { UserComponent } from "./user/user.component";

@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [BrowserModule],
  exports: [UserListComponent],
  providers: [ApiService]
})
export class UserListModule {}
