import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marca } from '../Models/Marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
    public listaMarcas: Marca[] = [];
    public formData: Marca = new Marca;
    public apiURL: string = 'https://localhost:7249/api/Marcas';
    public apiResponse: Marca = new Marca;

    constructor( public http: HttpClient ) { }

    getMarcaService() {
        this.http.get( this.apiURL + '/ListarMarcas' )
            .subscribe( data => {
                this.listaMarcas = data as Marca[];
            });
    }

    guardaMarcaService() {
        this.http.post( this.apiURL + '/InsertarMarca/', { descripcion: this.formData.descripcion } )
            .subscribe( data => {
                this.apiResponse = data as Marca;
                this.getMarcaService();
            });
    }

    eliminarMarcaService( data: Marca ) {
        this.http.delete( this.apiURL + '/EliminarMarca/' + data.id )
            .subscribe( data => {
                this.apiResponse = data as Marca;
                this.getMarcaService();
            });
    }
}
