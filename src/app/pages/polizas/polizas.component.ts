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
  totalPolizas: Observable <any>;
  polizasCount: BigInteger;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
       .get<any>("https://paep22-backend.herokuapp.com/poliza")
       .subscribe((data) => {
        this.polizasCount = data.length;
        this.totalPolizas = data;
       });
  }
}
