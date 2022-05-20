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
                  this.apiResponse = data as Ventas;
                  this.getVentasService();
              });
    }
}
