import { Component, OnInit } from "@angular/core";
// import { PolizasFormComponent } from "../polizas/polizas-form.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-polizas",
  templateUrl: "./polizas.component.html",
  styleUrls: ["./polizas.component.scss"],
})
export class PolizasComponent implements OnInit {
  totalPolizas;
  constructor(private http: HttpClient) {}

  // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
  // this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular', { headers }).subscribe(data => {
  //     this.totalAngularPackages = data.total;
  // })

  ngOnInit() {
    this.http
      .get<any>("https://api.npms.io/v2/search?q=scope:angular")
      .subscribe((data) => {
        this.totalPolizas = data.total;
      });
  }
}
