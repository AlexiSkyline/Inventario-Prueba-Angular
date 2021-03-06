import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnidadMedidaComponent } from './unidad-medida/unidad-medida.component';
import { UnidadMedidaAgregarComponent } from './unidad-medida-agregar/unidad-medida-agregar.component';
import { FormsModule } from '@angular/forms';
import { MarcaComponent } from './marca/marca.component';
import { MarcaAgregarComponent } from './marca-agregar/marca-agregar.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { EmpresaAgregarComponent } from './empresa-agregar/empresa-agregar.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ProveedorAgregarComponent } from './proveedor-agregar/proveedor-agregar.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { VendedorAgregarComponent } from './vendedor-agregar/vendedor-agregar.component';
import { ClienteAgregarComponent } from './cliente-agregar/cliente-agregar.component';
import { ArticuloAgregarComponent } from './articulo-agregar/articulo-agregar.component';
import { VentaComponent } from './venta/venta.component';
import { VentaAgregarComponent } from './venta-agregar/venta-agregar.component';
import { DetalleVentaAgregarComponent } from './detalle-venta-agregar/detalle-venta-agregar.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    UnidadMedidaComponent,
    UnidadMedidaAgregarComponent,
    MarcaComponent,
    MarcaAgregarComponent,
    EmpresaComponent,
    EmpresaAgregarComponent,
    ClienteComponent,
    ProveedorComponent,
    VendedorComponent,
    ProveedorAgregarComponent,
    VendedorAgregarComponent,
    ClienteAgregarComponent,
    ArticuloComponent,
    ArticuloAgregarComponent,
    VentaComponent,
    VentaAgregarComponent,
    DetalleVentaAgregarComponent,
    DetalleVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
