import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) {
  }

  buscaCep(cep : string){
    console.log('viacep.com.br/ws/' + cep + '/json/');
    return this.http.get('http://viacep.com.br/ws/' + cep + '/json/');
  }
}
