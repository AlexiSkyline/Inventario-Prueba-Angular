import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVentaAgregarComponent } from './detalle-venta-agregar.component';

describe('DetalleVentaAgregarComponent', () => {
  let component: DetalleVentaAgregarComponent;
  let fixture: ComponentFixture<DetalleVentaAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVentaAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleVentaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
