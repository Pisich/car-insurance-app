import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  totalSiniestros: Observable <any>;
  siniestrosCount: BigInteger;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
    .get<any>("https://paep22-backend.herokuapp.com/siniestro/last24hrs")
    .subscribe((data) => {
      this.siniestrosCount = data.length;
      this.totalSiniestros = data;
    });
  }

}
