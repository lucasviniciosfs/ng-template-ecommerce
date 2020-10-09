import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem/mensagem.component';
import { AlertModule, AlertConfig } from 'ngx-bootstrap/alert';
import { CarregandoComponent } from './carregando/carregando.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [MensagemComponent, CarregandoComponent],
  imports: [
    CommonModule,
    AlertModule,
    ModalModule
  ],
  exports: [
    MensagemComponent,
    CarregandoComponent
  ],
  providers:[
    AlertConfig,
    BsModalRef
  ],
  entryComponents:[
    MensagemComponent,
    CarregandoComponent
  ]
})
export class SharedModule { }
