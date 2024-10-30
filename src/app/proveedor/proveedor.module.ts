import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProveedorComponent } from './listar-proveedor/listar-proveedor.component';
import { CuProveedorComponent } from './cu-proveedor/cu-proveedor.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes=[
  {
    path: '',
    component: ListarProveedorComponent
  }]

@NgModule({
  declarations: [
    ListarProveedorComponent,
    CuProveedorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ProveedorModule { }
