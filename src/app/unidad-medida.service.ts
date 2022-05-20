import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnidadesMedidas } from '../Models/UnidadesMedidas';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {
    public listaUnidadesMedidas: UnidadesMedidas[] = [];
    public formData: UnidadesMedidas = new UnidadesMedidas;
    public apiURL: string = 'https://localhost:7249/api/UnidadesMedidas';
    public apiResponse: UnidadesMedidas = new UnidadesMedidas;

    constructor( public http: HttpClient ) {}

    getUnidadesMedidas() {
        this.http.get( this.apiURL + '/ListarUnidadMedida' )
              .subscribe( data => {
                  this.listaUnidadesMedidas = data as UnidadesMedidas[];
              });
    }

    guardarUnidadMedidaService() {
        this.http.post( this.apiURL + '/InsertarUnidadMedida/', { descripcion: this.formData.descripcion } )
              .subscribe( data => {
                  this.apiResponse = data as UnidadesMedidas;
                  this.getUnidadesMedidas();
              });
    }

    eliminarUnidadMedidaService( data: UnidadesMedidas ) {
        this.http.delete( this.apiURL + '/EliminarUnidadMedida/' + data.id )
              .subscribe( data => {
                  this.apiResponse = data as UnidadesMedidas;
                  this.getUnidadesMedidas();
              });
    }
}