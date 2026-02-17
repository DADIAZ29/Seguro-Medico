import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Servicios } from './shared/planes/planes';
import { Pagina404 } from './shared/pagina-404/pagina-404';
import { Nosotros } from './shared/nosotros/nosotros';
import { RegistroComponent } from './shared/registro/registro';

export const routes: Routes = [
    //Ruta Inicial
    {path:'', component: Home},

    //Rutas de navegacion 
    {path: 'planes', component: Servicios},

    {path: 'nosotros', component: Nosotros},

    {path: 'registro', component: RegistroComponent},

    //Final 
    {path: '**', component: Pagina404}
];
