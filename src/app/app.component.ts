import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppService } from './app.service';
import { MensagemService } from './shared/mensagem/mensagem.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MensagemComponent } from './shared/mensagem/mensagem.component';
import { Subscription, from } from 'rxjs';
import { Singleton } from './model/entity/Singleton';
declare function name(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'equilibrio-ecommerce';

  public carregando: boolean;
  public naoMostraNavBarMobile: boolean;
  public mostraCategorias: boolean;
  public singleton : Singleton;
  public esgotado : boolean = true;
  public logado : boolean = true;

  constructor(public servico: AppService,
              private router: Router,
              private servicoMensagem: MensagemService,
              private modalService: BsModalService){
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.carregando = true;
    this.singleton = new Singleton();
    this.naoMostraNavBarMobile = true;
    this.mostraCategorias = false;
    this.singleton.mobile = window.matchMedia('(max-width: 600px)').matches;
    this.carregando = false;
  }

  ngOnDestroy(){
  }

  public sair(){
  }

  fechaMenuMobile(){
    if (!this.naoMostraNavBarMobile) {
      this.naoMostraNavBarMobile = true;
    }
  }

  mostrarCategorias(){
    this.mostraCategorias = !this.mostraCategorias;
  }

}
