import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router, private userService: UserService) {}

  validarLogin() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(this.email)) {
      alert("Ingrese un correo electrónico válido.");
      return;
    }

    if (this.password.trim() === "") {
      alert("Ingrese su contraseña.");
      return;
    }

    // Llamada al servicio para autenticar al usuario
    this.userService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response.message === "Login exitoso") { // Verificar el mensaje de éxito
          alert("Inicio de sesión exitoso");
          localStorage.setItem('authToken', response.token); // Guardar el token en localStorage
          this.router.navigate(['/pages']); // Redirige al usuario a la página principal
        } else {
          alert("Correo o contraseña incorrectos.");
        }
      },
      error: (err) => {
        alert("Error en el servidor. Intente nuevamente más tarde.");
        console.error(err);
      }
    });
  }
}