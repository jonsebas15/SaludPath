import { Routes } from '@angular/router';
import { LoginComponent } from './entrar/login/login.component';
import { HomeComponent } from './home/home.component';
import { PagServiciosComponent } from './pag-servicios/pag-servicios.component';
import { HistorialComponent } from './pagServicios/historial/historial.component';
import { CitasComponent } from './pagServicios/citas/citas.component';
import { AutorizacionesComponent } from './pagServicios/autorizaciones/autorizaciones.component';
import { CrearCitasComponent } from './pagServicios/citas/crear-citas/crear-citas.component';
import { PagEncuestasComponent } from './pag-encuestas/pag-encuestas.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path:'home', component: HomeComponent, canActivate: [AuthGuard]
    },
    {
    path:'login', component: LoginComponent
    },
    {path:'encuesta', component: PagEncuestasComponent, canActivate: [AuthGuard]

    },
    {
        path: 'servicios', component: PagServiciosComponent,canActivate: [AuthGuard], children:[
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
