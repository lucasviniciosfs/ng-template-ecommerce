import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { MensagemService } from '../shared/mensagem/mensagem.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MensagemComponent } from '../shared/mensagem/mensagem.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public carregando : boolean;

  constructor(private servico : CadastroService,
              private servicoMensagem : MensagemService,
              private servicoHome : AppService,
              private router : Router,
              private modalService: BsModalService) { }

  ngOnInit() {
    window.scroll(0,0);
    this.carregando = true;

    setTimeout(() => 
    {
      this.carregando = false;
    },
    1000);
  }

  cadastrar() {
  }

  /** Método que é um evento focusout que é chamado assim que o usuario sai do campo CEP
   *  e então este método busca o endereço pelo cep na api ViaCep
   */
  carregaEndereco(event: any) {
        this.servico.buscaCep(event.value.replace('.','').replace('-','')).subscribe(
          resultado => {
            if (resultado === '{"erro": true}') {
              this.servicoMensagem.novoAlert('warning','CEP inválido ou inexistente',5000);
              this.modalService.show(MensagemComponent);
            } else {
              this.servicoMensagem.novoAlert('success',JSON.parse(JSON.stringify(resultado)),5000);
              this.modalService.show(MensagemComponent);
            }
          },
          erro => {
            switch (erro.status) {
              case 400:
                this.servicoMensagem.novoAlert('danger','CEP inválido ou inexistente',5000);
                this.modalService.show(MensagemComponent);
                break;
              case 500:
                this.servicoMensagem.novoAlert('danger','Erro na busca do CEP',5000);
                this.modalService.show(MensagemComponent);
                break;
            }
          }
        )
  }

  sair(){
    if (sessionStorage.getItem('Login') != null)
      sessionStorage.removeItem('Login');
    this.servicoMensagem.novoAlert('success','Logout realizado com sucesso!',5000);
    this.modalService.show(MensagemComponent);
    this.router.navigate(['/catalogo']);
  }
}

