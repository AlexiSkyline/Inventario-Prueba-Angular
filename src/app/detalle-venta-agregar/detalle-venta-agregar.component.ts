import { Component, OnInit } from '@angular/core';
import { DetalleVentaService } from '../detalle-venta.service';

@Component({
  selector: 'app-detalle-venta-agregar',
  templateUrl: './detalle-venta-agregar.component.html',
  styleUrls: ['./detalle-venta-agregar.component.css']
})
export class DetalleVentaAgregarComponent implements OnInit {
  constructor( public DetalleVentaService: DetalleVentaService ) { }

  ngOnInit(): void {
  }

  guardarDetalleVenta() {
    this.DetalleVentaService.guardaDetalleVentaService();
  }
}
