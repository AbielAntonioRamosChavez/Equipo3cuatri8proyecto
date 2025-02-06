import { Component, OnInit } from '@angular/core';
import { QRCodeGeneratorService } from '../services/qrcode-generator.service';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  historial: { id: number, fecha: string, hora: string, qrCode: string }[] = [];
  productos = [
    { nombre: 'Lácteos', imagen: 'assets/img/images/lacteos.jpg', link: '/leche' },
    { nombre: 'Botanas', imagen: 'assets/img/images/botanas.jpg', link: '#' },
    { nombre: 'Galletas', imagen: 'assets/img/images/galletas.jpg', link: '#' },
    { nombre: 'Limpieza', imagen: 'assets/img/images/limpieza_personal.jpg', link: '#' },
    { nombre: 'Café', imagen: 'assets/img/images/cafe.jpg', link: '#' },
    { nombre: 'Legumbres', imagen: 'assets/img/images/condimentos.jpg', link: '#' },
  ];

  constructor(private qrService: QRCodeGeneratorService) {}

  async ngOnInit() {
    const storedHistorial = localStorage.getItem('historialPedidos');
    if (storedHistorial) {
      this.historial = JSON.parse(storedHistorial);
      
      // Generar códigos QR para cada pedido
      for (let pedido of this.historial) {
        pedido.qrCode = await this.qrService.generateQRCode(
          `Pedido #${pedido.id} - Fecha: ${pedido.fecha} - Hora: ${pedido.hora}`
        );
      }
    }
  }
}
