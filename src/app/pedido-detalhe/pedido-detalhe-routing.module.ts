import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoDetalheComponent } from './pedido-detalhe.component';

const routes: Routes = [
  { path: '', component: PedidoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoDetalheRoutingModule { }
