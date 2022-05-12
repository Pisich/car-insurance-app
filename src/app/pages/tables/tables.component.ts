import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  totalSiniestros;
  constructor(private http: HttpClient) {
    http
      .get("https://paep22-backend.herokuapp.com/siniestro/last24hrs")
      .subscribe((response) => {
        console.log(response);
        this.totalSiniestros = response;
      });
  }

  ngOnInit() {
  }

}
