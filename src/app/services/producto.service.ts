import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private API_URL = 'http://localhost:5000/api/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  agregarProducto(producto: any): Observable<any> {
    return this.http.post<any>(this.API_URL, producto);
  }
}
