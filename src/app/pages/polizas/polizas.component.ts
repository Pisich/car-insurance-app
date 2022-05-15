import { Component, OnInit } from "@angular/core";
// import { PolizasFormComponent } from "../polizas/polizas-form.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-polizas",
  templateUrl: "./polizas.component.html",
  styleUrls: ["./polizas.component.scss"],
})
export class PolizasComponent implements OnInit {
  totalPolizas;
  polizasCount: BigInteger;

  constructor(private http: HttpClient) {
    this.http
      .get<any>("https://paep22-backend.herokuapp.com/poliza")
      .subscribe((data) => {
        this.totalPolizas = data;
        this.polizasCount = data.length;
      });
  }

  log(x) {
    console.log(x);
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async onSubmit(value) {
    console.log(value);

    this.http
      .post<any>("https://paep22-backend.herokuapp.com/poliza", value)
      .subscribe((data) => {});
    await this.delay(1000);
    this.getPolizas();
  }

  async onEdit(value) {
    console.log(value);

    this.http
      .put<any>("https://paep22-backend.herokuapp.com/poliza", value)
      .subscribe((data) => {});
    await this.delay(1000);
    this.getPolizas();
  }

  async onDelete(value) {
    console.log(value);

    this.http
      .delete<any>(`https://paep22-backend.herokuapp.com/poliza`, value)
      .subscribe((data) => {});
    await this.delay(1000);
    this.getPolizas();
  }

  getPolizas() {
    this.http
      .get<any>("https://paep22-backend.herokuapp.com/poliza")
      .subscribe((data) => {
        this.totalPolizas = data;
        this.polizasCount = data.length;
      });
    console.log("value");
    console.log(this.totalPolizas);
    console.log(this.polizasCount);
  }
  myFunction(editId) {
    var x = document.getElementById(editId);
    if (x.style.display === "none") {
      x.style.display = "block";
      x.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      x.style.display = "none";
    }
  }

  ngOnInit() {}
}
