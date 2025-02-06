import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  standalone: false,
  
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carrito = this.carritoService.obtenerCarrito();
  }

  programarHorario() {
    alert('Función para programar el horario de entrega en construcción.');
  }

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  eliminarDelCarrito(producto: any) {
    this.carrito = this.carrito.filter((item: any) => item.nombre !== producto.nombre);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }
}
