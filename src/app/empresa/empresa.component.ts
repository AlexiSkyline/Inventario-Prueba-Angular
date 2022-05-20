import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../../Models/Empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  constructor( public EmpresaService: EmpresaService ) { }

  ngOnInit(): void {
    this.EmpresaService.getEmpresaService();
  }

  borrarEmpresa( data: Empresa ) {
    this.EmpresaService.eliminarEmpresaService( data );
  }
}
