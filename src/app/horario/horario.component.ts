import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-horario',
  standalone: false,
  
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.css'
})
export class HorarioComponent {
  fecha: string = '';
  hora: string = '';

  confirmarHorario() {
    if (this.fecha && this.hora) {
      localStorage.setItem('fecha', this.fecha);
      localStorage.setItem('hora', this.hora);
  
      alert(`Horario confirmado para el ${this.fecha} a las ${this.hora}`);
    } else {
      alert('Por favor, selecciona una fecha y una hora.');
    }
  }
  
}
