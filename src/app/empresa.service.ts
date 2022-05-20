import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../Models/Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
    public listaEmpresas: Empresa[] = [];
    public formData: Empresa = new Empresa;
    public apiURL: string = 'https://localhost:7249/api/Empresa';
    public apiResponse: Empresa = new Empresa;

    constructor( public http: HttpClient ) { }

    getEmpresaService() {
        this.http.get( this.apiURL + '/ListarEmpresas' )
              .subscribe( data => {
                  this.listaEmpresas = data as Empresa[];
              });
    }

    guardaEmpresaService() {
        this.http.post( this.apiURL + '/InsertarEmpresa/', { nombre: this.formData.nombre, direccion: this.formData.direccion } )
              .subscribe( data => {
                  this.apiResponse = data as Empresa;
                  this.getEmpresaService();
              });
    }

    eliminarEmpresaService( data: Empresa ) {
        this.http.delete( this.apiURL + '/EliminarEmpresa/' + data.id )
              .subscribe( data => {
                  this.apiResponse = data as Empresa;
                  this.getEmpresaService();
              });
    }
}
