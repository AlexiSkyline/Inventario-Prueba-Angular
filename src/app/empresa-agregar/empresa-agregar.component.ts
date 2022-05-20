import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa-agregar',
  templateUrl: './empresa-agregar.component.html',
  styleUrls: ['./empresa-agregar.component.css']
})
export class EmpresaAgregarComponent implements OnInit {

  constructor( public EmpresaService: EmpresaService ) { }

  ngOnInit(): void {
  }

  guardarEmpresa() {
    this.EmpresaService.guardaEmpresaService();
  }
}
