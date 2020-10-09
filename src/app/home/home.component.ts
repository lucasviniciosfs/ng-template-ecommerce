import { environment } from 'src/environments/environment';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { HomeService } from './home.service';
import { Subject, Subscription } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Singleton } from '../model/entity/Singleton';
import { Banner } from '../model/entity/Banner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly unsubscribe : Subject<void>;

  public carregando : boolean;
  public itemsPerSlide = 5;
  public singleSlideOffset = true;
  public singleton: Singleton;
  public esgotado : boolean = true;
  public logado : boolean = true;

  constructor(
    private servicoRaiz : AppService,
    private servico : HomeService,
    private router : Router) {
  }

  ngOnInit(): void {
    this.carregando = true;
    this.singleton = Singleton._instancia;
    this.carregando = false;
  }

  ngOnDestroy(){
  }

  verDetalheProduto(produto : Object){
    this.router.navigate(['/produto-detalhe', produto]);
  }

}
