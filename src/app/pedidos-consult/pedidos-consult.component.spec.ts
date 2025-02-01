import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosConsultComponent } from './pedidos-consult.component';

describe('PedidosConsultComponent', () => {
  let component: PedidosConsultComponent;
  let fixture: ComponentFixture<PedidosConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidosConsultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
