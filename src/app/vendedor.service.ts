import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendedor } from '../Models/Vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {
    public listaVendedores: Vendedor[] = [];
    public formData: Vendedor = new Vendedor;
    public apiURL: string = 'https://localhost:7249/api/Vendedores';
    public apiResponse: Vendedor = new Vendedor;

    constructor( public http: HttpClient ) { }

    getVendedoresService() {
        this.http.get( this.apiURL + '/ListarVendedores' )
              .subscribe( data => {
                  this.listaVendedores = data as Vendedor[];
              });
    }

    guardaVendedorService() {
        this.http.post( this.apiURL + '/InsertarVendedor/', { 
              nombre: this.formData.nombre,
              apellidos: this.formData.apellidos,
              rfc: this.formData.rfc,
              direccion: this.formData.direccion,
              correo: this.formData.correo,
              telefono: this.formData.telefono, })
              .subscribe( data => {
                  this.apiResponse = data as Vendedor;
                  this.getVendedoresService();
              });
    }
}
