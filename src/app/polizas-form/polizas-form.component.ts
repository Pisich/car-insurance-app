import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-polizas-form",
  templateUrl: "./polizas-form.component.html",
  styleUrls: ["./polizas-form.component.scss"],
})
export class PolizasFormComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  log(x) {
    console.log(x);
  }

  submit(polizasForm) {
    console.log(polizasForm.value);
    this.http
      .post<any>(
        "https://paep22-backend.herokuapp.com/poliza",
        polizasForm.value
      )
      .subscribe((data) => {});
  }
}
