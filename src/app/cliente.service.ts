import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
    public listaClientes: Cliente[] = [];
    public formData: Cliente = new Cliente;
    public apiURL: string = 'https://localhost:7249/api/Clientes';
    public apiResponse: Cliente = new Cliente;

    constructor( public http: HttpClient ) { }

    getClientesService() {
        this.http.get( this.apiURL + '/ListarClientes' )
              .subscribe( data => {
                  this.listaClientes = data as Cliente[];
              });
    }

    guardaClienteService() {
        this.http.post( this.apiURL + '/InsertarCliente/', { 
              nombre: this.formData.nombre,
              apellidos: this.formData.apellidos,
              rfc: this.formData.rfc,
              direccion: this.formData.direccion,
              correo: this.formData.correo,
              telefono: this.formData.telefono, })
              .subscribe( data => {
                  this.apiResponse = data as Cliente;
                  this.getClientesService();
              });
    }

    eliminarClienteService( data: Cliente ) {
        this.http.delete( this.apiURL + '/EliminarCliente/' + data.id )
              .subscribe( data => {
                  this.apiResponse = data as Cliente;
                  this.getClientesService();
              });
    }
}
