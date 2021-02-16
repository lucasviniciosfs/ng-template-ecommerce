import { TestBed } from '@angular/core/testing';

import { PedidoDetalheService } from './pedido-detalhe.service';

describe('PedidoDetalheService', () => {
  let service: PedidoDetalheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoDetalheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
