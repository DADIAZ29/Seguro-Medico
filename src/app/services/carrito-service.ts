import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos: Producto[] = [];
  private productosSubject = new BehaviorSubject<Producto[]>([]);

  productos$ = this.productosSubject.asObservable();

  agregarProducto(producto: Producto) {
    const existente = this.productos.find(p => p.id === producto.id);
    if (existente) {
      existente.cantidad += producto.cantidad;
    } else {
      this.productos.push(producto);
    }
    this.productosSubject.next(this.productos);
  }

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
    this.productosSubject.next(this.productos);
  }

  limpiarCarrito() {
    this.productos = [];
    this.productosSubject.next(this.productos);
  }

  calcularSubtotal(): number {
    return this.productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  }

  calcularIVA(): number {
    return this.calcularSubtotal() * 0.15; 
  }

  calcularTotal(): number {
    return this.calcularSubtotal() + this.calcularIVA();
  }
}