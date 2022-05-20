import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-marca-agregar',
  templateUrl: './marca-agregar.component.html',
  styleUrls: ['./marca-agregar.component.css']
})
export class MarcaAgregarComponent implements OnInit {
  constructor( public MarcaService: MarcaService ) { }

  ngOnInit(): void {
  }

  guardarMarca() {
    this.MarcaService.guardaMarcaService();
  }
}
