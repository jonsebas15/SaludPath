import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
<<<<<<< Updated upstream
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // Agrega más rutas según sea necesario
  ];
  
=======
{
    path: 'auth/register',
    loadComponent: async () => (await import('./auth/register/register.component')).RegisterComponent
},
{
    path:'auth/login',
    loadComponent: async () => (await import('./auth/login/login.component')).LoginComponent
},

{
    path: 'dashboard', redirectTo: 'componentes/afiliados', pathMatch: 'full'
},

{
    path: 'componentes',
    loadComponent: async() => (await import('./componentes/componentes.component')).ComponentesComponent,
    children: [
        {
            path: 'afiliados',
            title: 'Afiliados',
            loadComponent: async () => (await import('./componentes/afiliados/afiliados.component')).AfiliadosComponent,
        },
        {
            path: 'ips',
            title: 'Ips',
            loadComponent: async () => (await import('./componentes/ips/ips.component')).IpsComponent,
        },
        {
            path: 'proveedores',
            title: 'Proveedores',
            loadComponent: async () => (await import('./componentes/proveedores/proveedores.component')).ProveedoresComponent
        },
        {
            path: 'medicos',
            title: 'Medicos',
            loadComponent: async () => (await import('./componentes/medicos/medicos.component')).MedicosComponent
        },
    ]
},
{
    path: '', redirectTo: 'auth/login', pathMatch: 'full'
}
];
>>>>>>> Stashed changes
