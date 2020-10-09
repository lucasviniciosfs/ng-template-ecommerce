import { Component, OnInit, OnDestroy } from '@angular/core';
import { MensagemService } from './mensagem.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Alert } from 'src/app/model/entity/Alert';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit, OnDestroy {

  public botaoFechar = true;

  constructor(public servico : MensagemService,
              public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {  
    this.servico.alert = new Alert();  
  }

  fechar(){
    this.servico.alert = new Alert();
    this.bsModalRef.hide()
  }
}
