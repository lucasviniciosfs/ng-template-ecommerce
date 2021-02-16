import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoDetalheRoutingModule } from './pedido-detalhe-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PedidoDetalheComponent } from './pedido-detalhe.component';

@NgModule({
  declarations: [PedidoDetalheComponent],
  imports: [
    CommonModule,
    PedidoDetalheRoutingModule,
    SharedModule
  ]
})
export class PedidoDetalheModule { }
