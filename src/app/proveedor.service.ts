import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../Models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
    public listaProveedores: Proveedor[] = [];
    public formData: Proveedor = new Proveedor;
    public apiURL: string = 'https://localhost:7249/api/Proveedores';
    public apiResponse: Proveedor = new Proveedor;

    constructor( public http: HttpClient ) { }

    getProveedoresService() {
        this.http.get( this.apiURL + '/ListarProveedores' )
              .subscribe( data => {
                  this.listaProveedores = data as Proveedor[];
              });
    }

    guardaProveedorService() {
        this.http.post( this.apiURL + '/InsertarProveedor/', { 
              nombre: this.formData.nombre,
              apellidos: this.formData.apellidos,
              rfc: this.formData.rfc,
              direccion: this.formData.direccion,
              correo: this.formData.correo,
              telefono: this.formData.telefono, })
              .subscribe( data => {
                  this.apiResponse = data as Proveedor;
                  this.getProveedoresService();
              });
    }

    eliminarProveedorService( data: Proveedor ) {
        this.http.delete( this.apiURL + '/EliminarProveedor/' + data.id )
              .subscribe( data => {
                  this.apiResponse = data as Proveedor;
                  this.getProveedoresService();
              });
    }
}
