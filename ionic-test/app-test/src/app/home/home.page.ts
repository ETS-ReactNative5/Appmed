import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  name = "";
  enteredText = "";

  constructor() {}

  confirmName() {
    console.log(this.enteredText);
    if (!this.enteredText) return;
    this.name = this.enteredText;
  }

  resetName() {
    this.enteredText = "";
  }

  deleteName() {
    this.enteredText = "";
    this.name = "";
  }
}
