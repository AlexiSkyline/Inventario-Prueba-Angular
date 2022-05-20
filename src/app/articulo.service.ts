import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../Models/Articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
    public listaArticulos: Articulo[] = [];
    public formData: Articulo = new Articulo;
    public apiURL: string = 'https://localhost:7249/api/Articulos';
    public apiResponse: Articulo = new Articulo;

    constructor( public http: HttpClient ) { }

    getArticulosService() {
        this.http.get( this.apiURL + '/ListarArticulos' )
              .subscribe( data => {
                  this.listaArticulos = data as Articulo[];
              });
    }

    guardaArticuloService() {
        this.http.post( this.apiURL + '/InsertarArticulo/', { 
              nombre: this.formData.nombre,
              descripcion: this.formData.descripcion,
              idUnidadMedida: this.formData.idUnidadMedida,
              idMarca: this.formData.idMarca,
              stock: this.formData.stock,
              idProveedor: this.formData.idProveedor })
              .subscribe( data => {
                  this.apiResponse = data as Articulo;
                  this.getArticulosService();
              });
    }

    eliminarArticuloService( data: Articulo ) {
        this.http.delete( this.apiURL + '/EliminarArticulo/' + data.id )
              .subscribe( data => {
                  this.apiResponse = data as Articulo;
                  this.getArticulosService();
              });
    }
}
