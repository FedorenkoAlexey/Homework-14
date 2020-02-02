import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UserListModule } from "./user-list/user-list.module";
// import { UserListComponent } from "./user-list/user-list.component";
import { UserComponent } from "./user-list/user/user.component";
// import { ApiService } from "./rest/api.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
