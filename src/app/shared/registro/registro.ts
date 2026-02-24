import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css'],
})
export class RegistroComponent {

  private servicioUsuario = inject(UsuarioService);

  // Lista reactiva de usuarios
  listaUsuarios = signal<Usuario[]>([]);

  // Objeto del usuario vinculado al formulario
  nuevoUsuario: Usuario = {
    nombre: '',
    apellidos: '',
    email: '',
    celular: '',
    password: '',
    rol: 'EMPLEADO', 
  };

  // Controla si estamos editando un registro
  editando = false;

  ngOnInit() {
    this.obtenerUsuarios();
  }

  // Método GET → obtener usuarios
  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe((datosUsuarios: Usuario[]) => {
      this.listaUsuarios.set(datosUsuarios);
    });
  }

  // Método DELETE 
  eliminarUsuario(id: string) {
    if (confirm('¿Desea eliminar el registro?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        this.obtenerUsuarios();
      });
    }
  }

  // Método para seleccionar usuario y editarlo
  seleccionarParaEditar(usuario: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...usuario };
  }

  // Método POST/PUT
  guardarUsuario() {
    if (this.editando && this.nuevoUsuario.id) {
      this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      });
    } else {
      this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      });
    }
  }

  // Método para limpiar el formulario
  resetear() {
    this.editando = false;
    this.nuevoUsuario = { 
      nombre: '',
      apellidos: '',
      email: '',
      celular: '',
      password: '',
      rol: 'EMPLEADO'
    };
  }
}