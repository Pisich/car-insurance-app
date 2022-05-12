import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { response } from "express";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  usuario;
  constructor(private http: HttpClient) {
    http
      .get("https://paep22-backend.herokuapp.com/user/diegoaranab@gmail.com")
      .subscribe((response) => {
        this.usuario = response;
      });
  }

  onSubmit(value) {
    console.log(value);

    this.http.put(
      "https://paep22-backend.herokuapp.com/user",
      value
    ).subscribe((response) => {
      this.usuario = response;
    });
  }

  ngOnInit() {}
}
