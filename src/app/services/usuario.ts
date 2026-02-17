import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private http = inject(HttpClient);

  
  private API_USUARIOS = 'https://seguro-medico-5c8c1-default-rtdb.firebaseio.com/';

  // Método GET 
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<{ [key: string]: Usuario }>(`${this.API_USUARIOS}/usuarios.json`).pipe(
      map(respuesta => {
        if (!respuesta) {
          return [];
        }
        return Object.keys(respuesta).map(id => {
          const usuarioConId = { ...respuesta[id], id: id };
          return usuarioConId;
        });
      })
    );
  }

  // Método POST 
  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_USUARIOS}/usuarios.json`, usuario);
  }

  // Método PUT 
  putUsuario(id: string, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API_USUARIOS}/usuarios/${id}.json`, usuario);
  }

  // Método DELETE 
  deleteUsuario(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_USUARIOS}/usuarios/${id}.json`);
  }
}