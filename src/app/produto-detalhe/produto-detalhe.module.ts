import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoDetalheRoutingModule } from './produto-detalhe-routing.module';
import { ProdutoDetalheComponent } from './produto-detalhe.component';
import { SharedModule } from '../shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [ProdutoDetalheComponent],
  imports: [
    CommonModule,
    ProdutoDetalheRoutingModule,
    SharedModule,
    TabsModule.forRoot(),
    FormsModule
  ]
})
export class ProdutoDetalheModule { }
