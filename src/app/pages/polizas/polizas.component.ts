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
  totalClientes;
  image;

  constructor(private http: HttpClient) {
    this.http
      .get<any>("https://paep22-backend.herokuapp.com/poliza")
      .subscribe((data) => {
        this.totalPolizas = data;
        this.polizasCount = data.length;
      });
    this.http
      .get<any>("https://paep22-backend.herokuapp.com/customer")
      .subscribe((data) => {
        this.totalClientes = data;
      });
  }

  log(x) {
    console.log(x);
  }

  selectFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.image = target.files[0];
    }
    console.log(this.image);
  }

  uploadPoliza() {
    const formData = new FormData();
    if (this.image === undefined) return;

    formData.append("poliza", this.image as Blob, this.image.name);
    console.log(formData);
    this.http
      .post<any>("https://paep22-backend.herokuapp.com/upload/poliza", formData)
      .subscribe((data) => {});
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async onSubmit(value) {
    if (this.image === undefined) return;

    // this.http
    //   .post<any>("https://paep22-backend.herokuapp.com/poliza", value)
    //   .subscribe((data) => {});
    // await this.delay(1000);

    const formData = new FormData();
    formData.append("poliza", this.image as Blob, this.image.name);
    // formData.append("filename", value.filename);
    formData.append("productName", value.productName);
    formData.append("asegurado", value.asegurado);
    formData.append("aseguradora", value.aseguradora);
    formData.append("tipo", value.tipo);
    value["poliza"] = formData;
    console.log(value);

    // console.log(formData.get("poliza"));
    this.http
      .post<any>("https://paep22-backend.herokuapp.com/upload/poliza", formData)
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
      .delete<any>("https://paep22-backend.herokuapp.com/poliza", {
        body: value,
      })
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

  // getCustomers() {
  //   this.http
  //     .get<any>("https://paep22-backend.herokuapp.com/customer")
  //     .subscribe((data) => {
  //       this.totalClientes = data;
  //     });
  //   console.log("value");
  //   console.log(this.totalClientes);
  // }
  myFunction(editId) {
    var x = document.getElementById(editId);
    if (x.style.display === "none") {
      x.style.display = "block";
      x.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      x.style.display = "none";
    }
  }

  ngOnInit() {}
}
