import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-agregar',
  templateUrl: './cliente-agregar.component.html',
  styleUrls: ['./cliente-agregar.component.css']
})
export class ClienteAgregarComponent implements OnInit {

  constructor( public ClienteService: ClienteService ) { }

  ngOnInit(): void {
  }

  guardarCliente() {
    this.ClienteService.guardaClienteService();
  }
}
