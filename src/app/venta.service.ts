import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ventas } from '../Models/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
    public listaVentas: Ventas[] = [];
    public formData: Ventas = new Ventas;
    public apiURL: string = 'https://localhost:7249/api/Ventas';
    public apiResponse: Ventas = new Ventas;

    constructor( public http: HttpClient ) { }

    getVentasService() {
        this.http.get( this.apiURL + '/ListarVentas' )
              .subscribe( data => {
                  this.listaVentas = data as Ventas[];
              });
    }

}
