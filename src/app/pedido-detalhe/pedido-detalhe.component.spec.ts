import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PedidoDetalheComponent } from './pedido-detalhe.component';

describe('PedidoDetalheComponent', () => {
  let component: PedidoDetalheComponent;
  let fixture: ComponentFixture<PedidoDetalheComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
