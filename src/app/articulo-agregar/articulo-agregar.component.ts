import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../articulo.service';
import { Articulo } from '../../Models/Articulo';

@Component({
  selector: 'app-articulo-agregar',
  templateUrl: './articulo-agregar.component.html',
  styleUrls: ['./articulo-agregar.component.css']
})
export class ArticuloAgregarComponent implements OnInit {

  constructor( public ArticuloService: ArticuloService ) { }

  ngOnInit(): void {
  }

  guardarArticulo() {
    this.ArticuloService.guardaArticuloService();
  }
}
