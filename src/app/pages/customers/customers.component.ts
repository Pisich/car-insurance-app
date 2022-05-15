import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"],
})
export class CustomersComponent implements OnInit {
  totalClientes;
  clientesCount: BigInteger;

  log(x) {
    console.log(x);
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async onSubmit(value) {
    console.log(value);

    this.http
      .post<any>("https://paep22-backend.herokuapp.com/customer", value)
      .subscribe((data) => {});
    await this.delay(1000);
    this.getCustomers();
  }

  async onEdit(value, email) {
    value['email'] = email;
    console.log(value);

    this.http
      .put<any>("https://paep22-backend.herokuapp.com/customer", value)
      .subscribe((data) => {});
    await this.delay(1000);
    this.getCustomers();
  }

  async onDelete(value) {
    console.log(value);

    this.http
      .delete<any>(`https://paep22-backend.herokuapp.com/customer/${value.email}`, value)
      .subscribe((data) => {});
    await this.delay(1000);
    this.getCustomers();
  }

  getCustomers() {
    this.http
      .get<any>("https://paep22-backend.herokuapp.com/customer")
      .subscribe((data) => {
        this.totalClientes = data;
        this.clientesCount = data.length;
      });
    console.log("value");
    console.log(this.totalClientes);
    console.log(this.clientesCount);
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
      .get<any>("https://paep22-backend.herokuapp.com/customer")
      .subscribe((data) => {
        this.totalClientes = data;
        this.clientesCount = data.length;
      });
  }

  ngOnInit() {}
}
