import { Component, OnInit } from '@angular/core';
import { VentaService } from '../venta.service';
import { Ventas } from '../../Models/Venta';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  constructor( public VentaService: VentaService) { }

  ngOnInit(): void {
    this.VentaService.getVentasService();
  }

  borrarVenta( data: Ventas ) {
    this.VentaService.eliminarVentaService( data );
  }
}
