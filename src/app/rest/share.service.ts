import { EventEmitter } from "@angular/core";

export class ShareService {
  private UserId: number;
  getUser: EventEmitter<number> = new EventEmitter();

  public transfId(id: number) {
    this.UserId = id;
    this.getUser.emit(this.UserId);
    console.log("share: ", id);
  }
}
