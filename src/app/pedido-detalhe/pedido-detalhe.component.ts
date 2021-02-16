import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MensagemService } from 'src/app/shared/mensagem/mensagem.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PedidosDetalheService } from './pedido-detalhe.service';

@Component({
  selector: 'app-pedido-detalhe',
  templateUrl: './pedido-detalhe.component.html',
  styleUrls: ['./pedido-detalhe.component.scss']
})
export class PedidoDetalheComponent implements OnInit {

  public carregando: boolean;

  constructor(private servico : PedidosDetalheService,
    private route: ActivatedRoute,
    private servicoMensagem : MensagemService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    window.scroll(0,0);
  }
}
