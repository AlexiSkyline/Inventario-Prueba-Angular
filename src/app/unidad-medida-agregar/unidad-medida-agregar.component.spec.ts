import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadMedidaAgregarComponent } from './unidad-medida-agregar.component';

describe('UnidadMedidaAgregarComponent', () => {
  let component: UnidadMedidaAgregarComponent;
  let fixture: ComponentFixture<UnidadMedidaAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadMedidaAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadMedidaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
