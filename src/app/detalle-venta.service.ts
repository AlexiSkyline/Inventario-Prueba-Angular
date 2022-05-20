import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalleVentas } from '../Models/DetalleVentas';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {
    public listaDetalleVentas: DetalleVentas[] = [];
    public formData: DetalleVentas = new DetalleVentas;
    public apiURL: string = 'https://localhost:7249/api/DetalleVentas';
    public apiResponse: DetalleVentas = new DetalleVentas;

    constructor( public http: HttpClient ) { }

    getDetalleVentasService() {
        this.http.get( this.apiURL + '/ListarDetalleVentas' )
              .subscribe( data => {
                  this.listaDetalleVentas = data as DetalleVentas[];
              });
    }

    guardaDetalleVentaService() {
        this.http.post( this.apiURL + '/InsertarDetalleVenta/', { 
              idVenta: this.formData.idVenta,
              idArticulo: this.formData.idArticulo,
              cantidad: this.formData.cantidad,
              precioCompra: this.formData.precioCompra,
              importe: this.formData.importe, })
              .subscribe( data => {
                  this.apiResponse = data as DetalleVentas;
                  this.getDetalleVentasService();
              });
    }

    eliminarDetalleVentaService( data: DetalleVentas ) {
        this.http.delete( this.apiURL + '/EliminarDetalleVentas/' + data.id )
              .subscribe( data => {
                  this.apiResponse = data as DetalleVentas;
                  this.getDetalleVentasService();
              });
    }
}
