import { inject, Injectable } from '@angular/core';
import { UsuarioService } from './usuario';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private servicioUsuario = inject(UsuarioService);

  sesionIniciada: boolean = (localStorage.getItem('sesion') === 'true');

  login(email: string, password: string): Observable<boolean> {
    return this.servicioUsuario.getUsuarios().pipe(
      map(usuario => {
        const usuarioCoincide = usuario.find(u => u.email === email && u.password === password);
        if (usuarioCoincide) {
          localStorage.setItem('sesion', 'true');
          localStorage.setItem('user', JSON.stringify(usuarioCoincide));
          this.sesionIniciada = true;
          return true;
        }
        return false;
      })
    );
  }

logout (){
  localStorage.removeItem('sesion');
  localStorage.removeItem('user');
  this.sesionIniciada = false;
}

}