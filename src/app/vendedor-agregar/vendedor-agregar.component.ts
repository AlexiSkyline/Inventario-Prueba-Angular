import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';

@Component({
  selector: 'app-vendedor-agregar',
  templateUrl: './vendedor-agregar.component.html',
  styleUrls: ['./vendedor-agregar.component.css']
})
export class VendedorAgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarVendedor() {
  }
}
