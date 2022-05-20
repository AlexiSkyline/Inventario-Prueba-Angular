import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadMedidaComponent } from './unidad-medida/unidad-medida.component';
import { MarcaComponent } from './marca/marca.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ProveedorComponent } from './proveedor/proveedor.component';

const routes: Routes = [
  { path: 'UnidadMedida', component: UnidadMedidaComponent },
  { path: 'Marca', component: MarcaComponent },
  { path: 'Empresa', component: EmpresaComponent },
  { path: 'Cliente', component: ClienteComponent },
  { path: 'Proveedor', component: ProveedorComponent },
  { path: 'Vendedor', component: VendedorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
