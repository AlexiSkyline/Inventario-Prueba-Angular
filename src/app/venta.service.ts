import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venta } from '../Models/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
    public listaVentas: Venta[] = [];
    public formData: Venta = new Venta;
    public apiURL: string = 'https://localhost:7249/api/Ventas';
    public apiResponse: Venta = new Venta;

    constructor( public http: HttpClient ) { }

    getVentasService() {
        this.http.get( this.apiURL + '/ListarVentas' )
              .subscribe( data => {
                  this.listaVentas = data as Venta[];
              });
    }

    guardaVentaService() {
        this.http.post( this.apiURL + '/InsertarVenta/', { 
              fecha: this.formData.fecha,
              idVendedor: this.formData.idVendedor,
              idCliente: this.formData.idCliente,
              folio: this.formData.folio,
              idEmpresa: this.formData.idEmpresa,
              total: this.formData.total,
              iva: this.formData.iva,
              subTotal: this.formData.subTotal,
              pagoCon: this.formData.pagoCon })
              .subscribe( data => {
                  this.apiResponse = data as Venta;
                  this.getVentasService();
              });
    }

    eliminarVentaService( data: Venta ) {
        this.http.delete( this.apiURL + '/EliminarVentas/' + data.id )
              .subscribe( data => {
                  this.apiResponse = data as Venta;
                  this.getVentasService();
              });
    }
}
