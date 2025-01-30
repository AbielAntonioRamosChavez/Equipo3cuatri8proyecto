import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ''; // Se agregó una variable para almacenar el correo ingresado.
  password: string = ''; // Se agregó una variable para almacenar la contraseña ingresada.
  rememberMe: boolean = false; // Se agregó una variable para manejar la opción de "Recordar contraseña".

  constructor(private router: Router) {} // Se inyecta el Router para realizar la redirección tras un inicio de sesión exitoso.

  validarLogin() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar que el correo tenga un formato correcto.

    if (!emailRegex.test(this.email)) { // Se verifica si el correo ingresado cumple con el formato adecuado.
      alert("Ingrese un correo electrónico válido.");
      return;
    }

    if (this.password.trim() === "") { // Se asegura que la contraseña no esté vacía antes de proceder.
      alert("Ingrese su contraseña.");
      return;
    }

    // Simulación de autenticación con credenciales predefinidas.
    if (this.email === "admin@example.com" && this.password === "123456") { 
      alert("Inicio de sesión exitoso");
      this.router.navigate(['/pages']); // Se redirige al usuario a la página principal si las credenciales son correctas.
    } else {
      alert("Correo o contraseña incorrectos."); // Se notifica al usuario en caso de error en las credenciales.
    }
  }
}

