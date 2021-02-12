import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { MensagemService } from '../shared/mensagem/mensagem.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MensagemComponent } from '../shared/mensagem/mensagem.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public carregando : boolean;
  public guardarLogin : boolean;
  public carregandoRecuperaSenha : boolean;

  constructor(private servico : LoginService,
              private router : Router,
              private servicoMensagem : MensagemService,
              private modalService: BsModalService,
              private servicoRaiz : AppService) { }

  ngOnInit() {
    window.scroll(0,0);
    this.guardarLogin = false;
  }

}
