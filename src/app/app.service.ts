import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MensagemService } from './shared/mensagem/mensagem.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MensagemComponent } from './shared/mensagem/mensagem.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
  ) { }
}
