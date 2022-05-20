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
}
