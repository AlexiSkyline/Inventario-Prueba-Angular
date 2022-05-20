import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloAgregarComponent } from './articulo-agregar.component';

describe('ArticuloAgregarComponent', () => {
  let component: ArticuloAgregarComponent;
  let fixture: ComponentFixture<ArticuloAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
