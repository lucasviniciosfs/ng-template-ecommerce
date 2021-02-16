import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { NgxMaskModule } from 'ngx-mask'
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [CadastroComponent ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule,
  ]
})
export class CadastroModule { }
