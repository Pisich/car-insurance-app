import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-aseguradora',
  templateUrl: './aseguradora.component.html',
  styleUrls: ['./aseguradora.component.scss']
})
export class AseguradoraComponent implements OnInit {
  totalAseguradoras;
  aseguradorasCount: BigInteger;

  log(x) {
    console.log(x);
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async onSubmit(value) {
    console.log(value);

    this.http
      .post<any>("https://paep22-backend.herokuapp.com/aseguradora", value)
      .subscribe((data) => {});
    await this.delay(1000);
    this.getAseguradoras();
  }

  async onEdit(value, RFC) {
    value['RFC'] = RFC;
    console.log(value);

    this.http
      .put<any>("https://paep22-backend.herokuapp.com/aseguradora", value)
      .subscribe((data) => {});
    await this.delay(1000);
    this.getAseguradoras();
  }

  async onDelete(value) {
    console.log(value);

    this.http
      .delete<any>(`https://paep22-backend.herokuapp.com/aseguradora/${value.RFC}`, value)
      .subscribe((data) => {});
    await this.delay(1000);
    this.getAseguradoras();
  }

  getAseguradoras() {
    this.http
      .get<any>("https://paep22-backend.herokuapp.com/aseguradora")
      .subscribe((data) => {
        this.totalAseguradoras = data;
        this.aseguradorasCount = data.length;
      });

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

  constructor(private http: HttpClient) {
    this.http
      .get<any>("https://paep22-backend.herokuapp.com/aseguradora")
      .subscribe((data) => {
        this.totalAseguradoras = data;
        this.aseguradorasCount = data.length;
      });
  }

  ngOnInit() {}

}
