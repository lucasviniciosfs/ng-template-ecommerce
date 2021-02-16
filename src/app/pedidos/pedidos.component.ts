import { Component, OnInit } from '@angular/core';
import { PedidosService } from './pedidos.service';
import { MensagemService } from '../shared/mensagem/mensagem.service';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
 
  public carregando: boolean;

  constructor(private servico : PedidosService,
              private servicoMensagem : MensagemService,
              private router : Router,
              private modalService: BsModalService) { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
