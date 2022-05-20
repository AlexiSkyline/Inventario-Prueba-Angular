import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/Models/Marca';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {
  constructor( public MarcaService: MarcaService ) { }

  ngOnInit(): void {
    this.MarcaService.getMarcaService();
  }

  borrarMarca( data: Marca ) {
    this.MarcaService.eliminarMarcaService( data );
  }
}
