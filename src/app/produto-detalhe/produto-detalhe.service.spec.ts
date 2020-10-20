import { TestBed } from '@angular/core/testing';

import { ProdutoDetalheService } from './produto-detalhe.service';

describe('ProdutoDetalheService', () => {
  let service: ProdutoDetalheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoDetalheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
