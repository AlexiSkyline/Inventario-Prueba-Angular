import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/Models/Articulo';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  constructor( public ArticuloService: ArticuloService ) { }

  ngOnInit(): void {
    this.ArticuloService.getArticulosService();
  }

  borrarArticulo( data: Articulo ) {
    this.ArticuloService.eliminarArticuloService( data );
  }
}
