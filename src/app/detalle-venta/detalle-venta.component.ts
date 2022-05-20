import { Component, OnInit } from '@angular/core';
import { DetalleVentaService } from '../detalle-venta.service';
import { DetalleVentas } from '../../Models/DetalleVentas';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent implements OnInit {
  constructor( public DetalleVentaService: DetalleVentaService ) { }

  ngOnInit(): void {
    this.DetalleVentaService.getDetalleVentasService();
  }

  borrarDetalleVenta( data: DetalleVentas ) {
    this.DetalleVentaService.eliminarDetalleVentaService( data );
  }
}
