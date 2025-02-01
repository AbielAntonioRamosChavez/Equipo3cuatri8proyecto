import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';


@Component({
  selector: 'app-leche',
  standalone: false,
  
  templateUrl: './leche.component.html',
  styleUrl: './leche.component.css'
})

export class LecheComponent implements OnInit {
  productos = [
    { nombre: 'Leche Alpura Deslactosada', precio: 25.00, imagen: 'assets/img/imgproductos/alpura_deslactosada.jpg' },
    { nombre: 'Leche Alpura Clásica', precio: 24.00, imagen: 'assets/img/imgproductos/alpura_entera.jpg' },
    { nombre: 'Leche Lala Entera', precio: 23.50, imagen: 'assets/img/imgproductos/lala_entera.jpg' },
    { nombre: 'Leche Lala Deslactosada', precio: 24.50, imagen: 'assets/img/imgproductos/laladeslatosada.jpg' },
    { nombre: 'Nutri Leche', precio: 22.00, imagen: 'assets/img/imgproductos/nutrileche.jpg' }
  ];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {}

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    alert(`${producto.nombre} añadido al carrito.`);
  }
}
