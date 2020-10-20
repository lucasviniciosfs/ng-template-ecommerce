import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

import { AppService } from '../app.service';
import { environment } from 'src/environments/environment';
import { Singleton } from '../model/entity/Singleton';
import { MensagemComponent } from '../shared/mensagem/mensagem.component';
import { MensagemService } from '../shared/mensagem/mensagem.service';
import { ProdutoDetalheService } from './produto-detalhe.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit,OnDestroy {

  public carregando: boolean;
  public singleton: Singleton;
  public inscricoes : Subscription[];
  public carregandoParcelamento : boolean;
  public environment;

  constructor(private route: ActivatedRoute,
    private servico: ProdutoDetalheService,
    private servicoMensagem: MensagemService,
    private modalService: BsModalService,
    private router : Router,
    private servicoRaiz : AppService) { }

  ngOnInit() {
    window.scroll(0,0);
    this.carregando = true;
    this.environment = environment;
    this.inscricoes = [];
    this.singleton = Singleton._instancia;
    this.carregando = false;
  }

  ngOnDestroy(){
    this.inscricoes.forEach(s => s.unsubscribe());
  }

}
