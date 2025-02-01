import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = [];

  constructor() {}

  obtenerCarrito() {
    return this.carrito;
  }

  agregarProducto(producto: any) {
    this.carrito.push(producto);
    console.log('Producto agregado al carrito:', producto);
  }
}

