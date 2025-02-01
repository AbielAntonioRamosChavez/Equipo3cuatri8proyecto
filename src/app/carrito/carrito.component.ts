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

  eliminarDelCarrito(producto: any) {
    this.carrito = this.carrito.filter(p => p !== producto);
  }
}
