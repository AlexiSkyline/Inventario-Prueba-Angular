import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadMedidaComponent } from './unidad-medida/unidad-medida.component';
import { MarcaComponent } from './marca/marca.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { VentaComponent } from './venta/venta.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';

const routes: Routes = [
  { path: 'UnidadMedida', component: UnidadMedidaComponent },
  { path: 'Marca', component: MarcaComponent },
  { path: 'Empresa', component: EmpresaComponent },
  { path: 'Cliente', component: ClienteComponent },
  { path: 'Proveedor', component: ProveedorComponent },
  { path: 'Vendedor', component: VendedorComponent },
  { path: 'Articulo', component: ArticuloComponent },
  { path: 'Venta', component: VentaComponent },
  { path: 'DetalleVenta', component: DetalleVentaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
