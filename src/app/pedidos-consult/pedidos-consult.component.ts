import { Component } from '@angular/core';

interface Pedido {
  nombre: string;
  telefono: string;
  productos: string[];
  tiempoTotal: string;
  hora: string;
}


@Component({
  selector: 'app-pedidos-consult',
  standalone: false,
  
  templateUrl: './pedidos-consult.component.html',
  styleUrl: './pedidos-consult.component.css'
})
export class PedidosConsultComponent {
  folio: string = '';
  pedido: Pedido | null = null;

  // Simulación de datos de pedidos
  private pedidos: { [key: string]: Pedido } = {
    '12345': {
      nombre: 'Mauricio Perez Lopez',
      telefono: '271-105-8985',
      productos: ['Lecthe', 'Huevo', 'Yogurt'],
      tiempoTotal: '$100',
      hora: '11:00'
    },
    '67890': {
      nombre: 'Juan Garcia',
      telefono: '123-456-7890',
      productos: ['Pan', 'Leche', 'Queso'],
      tiempoTotal: '$150',
      hora: '12:00'
    }
  };

  buscarPedido() {
    if (this.pedidos[this.folio]) {
      this.pedido = this.pedidos[this.folio];
    } else {
      alert('Pedido no encontrado');
      this.pedido = null;
    }
  }

  aceptarPedido() {
    console.log('Pedido aceptado');
    // Lógica para aceptar el pedido
  }

  generarTicket() {
    console.log('Ticket generado');
    // Lógica para generar un ticket
  }

  rechazarPedido() {
    console.log('Pedido rechazado');
    // Lógica para rechazar el pedido
  }

}
