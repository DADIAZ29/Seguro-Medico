import { Routes } from '@angular/router';
import { Servicios } from './shared/servicios/servicios';
import { Home } from './features/home/home';
import { Pagina404 } from './shared/pagina-404/pagina-404';
import { Nosotros } from './shared/nosotros/nosotros';

export const routes: Routes = [
    //Ruta Inicial
    {path:'', component: Home},

    //Rutas de navegacion 
    {path: 'servicios', component: Servicios},

    {path: 'nosotros', component: Nosotros},

    //Final 
    {path: '**', component: Pagina404}
];
