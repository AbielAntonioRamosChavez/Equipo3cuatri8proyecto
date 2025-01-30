import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-register',
  standalone:false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Propiedades para el formulario de registro
  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  correo: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';

  constructor(private userService: UserService, private router: Router) {}

  // Método para manejar el envío del formulario
  registrarUsuario() {
    // Validar que las contraseñas coincidan
    if (this.contrasena !== this.confirmarContrasena) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Crear el objeto con los datos del usuario
    const userData = {
      nombre: this.nombre,
      apellidos: `${this.apellidoPaterno} ${this.apellidoMaterno}`,
      correo: this.correo,
      contrasena: this.contrasena,
    };

    // Llamar al servicio para registrar al usuario
    this.userService.registrarUsuario(userData).subscribe({
      next: (response) => {
        alert('Usuario registrado exitosamente');
        this.router.navigate(['/login']); // Redirigir al usuario al login
      },
      error: (err) => {
        alert('Error al registrar usuario. Intente nuevamente.');
        console.error(err);
      }
    });
  }
}