import { Component, OnInit } from '@angular/core';
import { UnidadMedidaService } from '../unidad-medida.service';

@Component({
  selector: 'app-unidad-medida-agregar',
  templateUrl: './unidad-medida-agregar.component.html',
  styleUrls: ['./unidad-medida-agregar.component.css']
})
export class UnidadMedidaAgregarComponent implements OnInit {
  constructor( public unidadMedidaService: UnidadMedidaService ) {}

  ngOnInit(): void {}

  guardarUnidadMedida() {
      this.unidadMedidaService.guardarUnidadMedidaService();
  }
}