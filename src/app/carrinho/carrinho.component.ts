import { environment } from 'src/environments/environment';

import { Component, OnInit, ViewChild, OnDestroy, Renderer2, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AppService } from '../app.service';
import { MensagemService } from '../shared/mensagem/mensagem.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CarrinhoService } from './carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  @ViewChild('parentModal', { static: false }) parentModal: ModalDirective;
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  @ViewChild('enderecoModal', { static: false }) enderecoModal: ModalDirective;

  public carrinhoVazio: boolean;
  public locacaoPermitda: boolean = true;
  public valorTotalCompra: number;
  public valorTotalCompraCartao: number;
  public valorTotalLocacao: number;
  public valorTotal: number;
  public valorTotalCartao: number;
  public valorTotalComFrete: number;
  public valorTotalCartaoComFrete: number;
  public locacaoDisponivel: boolean;
  public utilizaCorreios: boolean;
  public bsModalRef: BsModalRef;
  public carregando: boolean;
  public quantidadeParcelas : number[];
  public loadingBuscaPagamentos : boolean;
  public valorFretePAC : number;
  public valorFreteSEDEX : number;
  public qtdeDiasPAC : number;
  public qtdeDiasSEDEX : number;
  public mostraOpcoesFrete : boolean;
  public loadingBuscaFrete : boolean;
  public carregandoParcelamento : boolean;
  public environment;

  constructor(private servicoMensagem: MensagemService,
              private modalService: BsModalService,
              private servico : CarrinhoService,
              private router : Router,
              private renderer2: Renderer2,
              private servicoRaiz : AppService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.carregando = true;
    this.inicializaComponent();
    this.carregando = false;
  }

  private inicializaComponent() {
    this.environment = environment;
    this.loadingBuscaPagamentos = false;
    this.loadingBuscaFrete = false;
    this.mostraOpcoesFrete = false;
    this.valorTotalCompra = 0;
    this.valorTotalLocacao = 0;
  }

  fecharModalCartao(){
    this.loadingBuscaPagamentos = false;
    this.childModal.hide();
  }
}



