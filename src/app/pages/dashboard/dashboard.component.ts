import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "../../variables/charts";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public datasets: any;
  
  public data: any;
  public cantidades: any;
  public salesChart;
  public ordersChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  c_polizas: BigInteger;
  c_siniestros: BigInteger;
  c_aseguradoras: BigInteger;
  c_clientes: BigInteger;
  

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  constructor(private http: HttpClient) {
    this.http
      .get<any>("https://paep22-backend.herokuapp.com/poliza")
      .subscribe((data) => {
        this.c_polizas = data.length;
      });

    this.http
      .get<any>("https://paep22-backend.herokuapp.com/siniestro/last24hrs")
      .subscribe((data) => {
        this.c_siniestros = data.length;
      });

    this.http
      .get<any>("https://paep22-backend.herokuapp.com/aseguradora")
      .subscribe((data) => {
        this.c_aseguradoras = data.length;
      });

    this.http
      .get<any>("https://paep22-backend.herokuapp.com/customer")
      .subscribe((data) => {
        this.c_clientes = data.length;
      });
      
  }

  ngOnInit() {
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40],
    ];
    
    this.data = this.datasets[0];
    console.log(this.cantidades);

    var chartOrders = document.getElementById("chart-orders");

    parseOptions(Chart, chartOptions());

    this.ordersChart = new Chart(chartOrders, {
      type: "bar",
      options: chartExample2.options,
      data: {
        labels: ["Aseguradoras", "Clientes", "Pólizas", "Siniestros"],
        datasets: [
          {
            label: "Cantidad",
            data: [this.c_aseguradoras, this.c_clientes, this.c_polizas, this.c_siniestros],
            maxBarThickness: 10,
          },
        ],
      },
    });

    var chartSales = document.getElementById("chart-sales");

    this.salesChart = new Chart(chartSales, {
      type: "line",
      options: chartExample1.options,
      data: chartExample1.data,
    });
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
    
  }
}
