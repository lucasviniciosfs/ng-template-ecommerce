import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxMaskModule } from 'ngx-mask'


@NgModule({
  declarations: [CarrinhoComponent],
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
    SharedModule,
    FormsModule,
    ModalModule,
    NgxMaskModule.forRoot(),
  ]
})
export class CarrinhoModule { }
