import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  hideMenu(): void {
    let menu = document.getElementById("navbarSupportedContent");
    let icono: any = document.getElementById("nav-toggle");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      icono.checked = false;
    }
  }
}
