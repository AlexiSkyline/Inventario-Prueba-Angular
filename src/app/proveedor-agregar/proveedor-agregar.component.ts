import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-agregar',
  templateUrl: './proveedor-agregar.component.html',
  styleUrls: ['./proveedor-agregar.component.css']
})
export class ProveedorAgregarComponent implements OnInit {

  constructor( public ProveedorService: ProveedorService ) { }

  ngOnInit(): void {
  }

  guardarProveedor() {
    this.ProveedorService.guardaProveedorService();
  }
}
