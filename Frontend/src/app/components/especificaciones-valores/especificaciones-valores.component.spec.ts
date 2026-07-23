import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificacionesValoresComponent } from './especificaciones-valores.component';

describe('EspecificacionesValoresComponent', () => {
  let component: EspecificacionesValoresComponent;
  let fixture: ComponentFixture<EspecificacionesValoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecificacionesValoresComponent]
    });
    fixture = TestBed.createComponent(EspecificacionesValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
