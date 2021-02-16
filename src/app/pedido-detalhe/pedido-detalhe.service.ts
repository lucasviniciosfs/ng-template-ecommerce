import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class PedidosDetalheService {

  constructor(private http : HttpClient) { }

}