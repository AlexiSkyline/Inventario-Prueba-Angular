import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaAgregarComponent } from './marca-agregar.component';

describe('MarcaAgregarComponent', () => {
  let component: MarcaAgregarComponent;
  let fixture: ComponentFixture<MarcaAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
