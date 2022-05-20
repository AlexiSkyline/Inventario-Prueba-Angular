import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../../Models/Proveedor';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  constructor( public ProveedorService: ProveedorService ) { }

  ngOnInit(): void {
    this.ProveedorService.getProveedoresService();
  }

  borrarProveedor( data: Proveedor ) {
    this.ProveedorService.eliminarProveedorService( data );
  }
}
