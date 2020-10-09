import { Alert } from './../../model/entity/Alert';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  public alert: Alert; 

  constructor() { }

  novoAlert(tipo : string, mensagem : string, timeout : number): void{
    this.alert = new Alert();
    this.alert.msg = mensagem;
    this.alert.type = tipo;
    this.alert.timeout = timeout;     
  }

}
