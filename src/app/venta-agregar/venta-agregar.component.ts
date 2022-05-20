import { Component, OnInit } from '@angular/core';
import { VentaService } from '../venta.service';

@Component({
  selector: 'app-venta-agregar',
  templateUrl: './venta-agregar.component.html',
  styleUrls: ['./venta-agregar.component.css']
})
export class VentaAgregarComponent implements OnInit {
  constructor( public VentaService: VentaService ) { }

  ngOnInit(): void {
  }

  guardarVenta() {
    this.VentaService.guardaVentaService();
  }
}
