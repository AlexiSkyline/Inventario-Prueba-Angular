import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../../Models/Cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor( public ClienteService: ClienteService ) { }

  ngOnInit(): void {
    this.ClienteService.getClientesService();
  }

  borrarCliente( data: Cliente ) {
    this.ClienteService.eliminarClienteService( data );
  }
}
