import { Routes } from '@angular/router';
import { LoginComponent } from './entrar/login/login.component';
import { HomeComponent } from './home/home.component';
import { PagServiciosComponent } from './pag-servicios/pag-servicios.component';
import { HistorialComponent } from './pagServicios/historial/historial.component';
import { CitasComponent } from './pagServicios/citas/citas.component';
import { AutorizacionesComponent } from './pagServicios/autorizaciones/autorizaciones.component';
import { CrearCitasComponent } from './pagServicios/citas/crear-citas/crear-citas.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path:'home', component: HomeComponent
    },
    {
    path:'login', component: LoginComponent
    },
    {
        path: 'servicios', component: PagServiciosComponent, children:[
            {
                path: 'historial', component:HistorialComponent
            },
            {
                path: 'citas', component:CitasComponent
            },
            {
                path: 'autorizaciones', component: AutorizacionesComponent
            },
            {
                path: 'citas/crear', component: CrearCitasComponent
            }
        ]
    }
];
