import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';
import { Vendedor } from '../../Models/Vendedor';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {
  constructor( public VendedorService: VendedorService ) { }

  ngOnInit(): void {
    this.VendedorService.getVendedoresService();
  }

  borrarVendedor( data: Vendedor ) {
    this.VendedorService.eliminarVendedorService( data );
  }
}
