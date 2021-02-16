import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';

import { BsDropdownModule, BsDropdownConfig, BsDropdownDirective  } from 'ngx-bootstrap/dropdown';

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppBootstrapModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } },
    BsDropdownDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
