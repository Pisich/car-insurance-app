import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
// import { PolizasFormComponent } from "./pages/polizas/polizas-form.component";
import { ClientesComponent } from './clientes/clientes.component';
import { PolizasComponent } from './pages/polizas/polizas.component';
import { TablesComponent } from './pages/tables/tables.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    // PolizasFormComponent,
    AdminLayoutComponent,
    PolizasComponent,
    TablesComponent,
    AuthLayoutComponent,
    ClientesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
