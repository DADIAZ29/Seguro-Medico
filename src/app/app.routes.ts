import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Servicios } from './shared/planes/planes';
import { Pagina404 } from './shared/pagina-404/pagina-404';
import { Nosotros } from './shared/nosotros/nosotros';
import { RegistroComponent } from './shared/registro/registro';
import { authGuard } from './guards/auth-guard';
import { Login } from './shared/login/login';
import { Carrito } from './shared/carrito/carrito';

export const routes: Routes = [
    //Ruta Inicial
    { path: '', component: Home },

    //Rutas de navegacion 
    { path: 'planes', component: Servicios },

    { path: 'nosotros', component: Nosotros },

    { path: 'registro', component: RegistroComponent, canActivate: [authGuard] },

    { path: 'login', component: Login },

    {path:'carrito', component: Carrito, canActivate: [authGuard]},

    //Final 
    { path: '**', component: Pagina404 }
];
