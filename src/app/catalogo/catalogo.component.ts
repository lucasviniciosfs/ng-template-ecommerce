import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Singleton } from '../model/entity/Singleton';
import { AppService } from '../app.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit,OnDestroy {

  public singleton : Singleton;
  public inscricoes : Subscription[];
  public locacaoDisponivel : boolean;
  public carregando : boolean;
  public isCollapsed : boolean;
  public textoInfo : string;
  public environment;

  constructor(private servicoRaiz : AppService,
              private router : Router) {
  }

  ngOnInit() {
    window.scroll(0,0);
    this.carregando = true;
    /**
     * Timeout apenas para apresentar o component de carregando
     */
    setTimeout(() => 
    {
      this.environment = environment;
      this.isCollapsed = false;
      this.inscricoes = [];
      this.singleton = Singleton._instancia;
      this.carregando = false;
    },
    2000);
  }

  ngOnDestroy(){
    this.inscricoes?.forEach(s => s.unsubscribe());
  }

}
