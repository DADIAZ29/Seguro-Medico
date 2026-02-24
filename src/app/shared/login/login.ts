import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  email = '';
  password = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  iniciarSesion() {
    this.authService.login(this.email, this.password).subscribe((exito: boolean) => {
      if (exito) {
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/registro']);
      } else {
        alert('Credenciales incorrectas');
      }
    });
  }

  cerrarSesion() {
    this.authService.logout();

  }
}