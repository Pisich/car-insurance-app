import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { PolizasComponent } from 'src/app/pages/polizas/polizas.component';
import { ClientesComponent } from 'src/app/clientes/clientes.component';
import { CustomersComponent } from 'src/app/pages/customers/customers.component';
import { AseguradoraComponent } from 'src/app/aseguradora/aseguradora.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'perfil',   component: UserProfileComponent },
    { path: 'siniestros',         component: TablesComponent },
    { path: 'polizas',         component: PolizasComponent },
    { path: 'clientes',         component: CustomersComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'aseguradora',      component: AseguradoraComponent}
];
