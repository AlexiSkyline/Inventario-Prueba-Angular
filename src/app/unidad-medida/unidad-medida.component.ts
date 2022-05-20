import { Component, OnInit } from '@angular/core';
import { UnidadMedidaService } from '../unidad-medida.service';
import { UnidadesMedidas } from '../../Models/UnidadesMedidas';

@Component({
  selector: 'app-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.css']
})
export class UnidadMedidaComponent implements OnInit {
    constructor( public unidadMedidaService: UnidadMedidaService ) { }

    ngOnInit(): void {
        this.unidadMedidaService.getUnidadesMedidas();
    }

    borrarUnidadMedida( data: UnidadesMedidas ) {
        this.unidadMedidaService.eliminarUnidadMedidaService( data );
    }
}