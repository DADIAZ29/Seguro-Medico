import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../services/carrito-service';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css'],
})
export class Carrito {
  productos: Producto[] = [];

  constructor(private carritoService: CarritoService) {
    this.carritoService.productos$.subscribe((p: Producto[]) => this.productos = p);
  }

  get subtotal() {
    return this.carritoService.calcularSubtotal();
  }
  get iva() {
    return this.carritoService.calcularIVA();
  }

  get total() {
    return this.carritoService.calcularTotal();
  }

  eliminar(id: number) {
    this.carritoService.eliminarProducto(id);
  }

  limpiar() {
    this.carritoService.limpiarCarrito();
  }

}
