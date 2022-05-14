import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "ni-tv-2 text-primary",
    class: "",
  },
  {
    path: "/clientes",
    title: "Clientes",
    icon: "ni-bullet-list-67 text-green",
    class: "",
  },
  {
    path: "/siniestros",
    title: "Siniestros",
    icon: "ni-bullet-list-67 text-red",
    class: "",
  },
  // { path: "/icons", title: "Icons", icon: "ni-planet text-blue", class: "" },
  // { path: "/maps", title: "Mapa", icon: "ni-pin-3 text-orange", class: "" },
  {
    path: "/polizas",
    title: "Polizas",
    icon: "ni-bullet-list-67 text-blue",
    class: "",
  },
  {
    path: "/perfil",
    title: "Perfil",
    icon: "ni-single-02 text-yellow",
    class: "",
  },

  // {
  //   path: "/login",
  //   title: "Iniciar Sesión",
  //   icon: "ni-key-25 text-info",
  //   class: "",
  // },
  // {
  //   path: "/register",
  //   title: "Registrarse",
  //   icon: "ni-circle-08 text-pink",
  //   class: "",
  // },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
