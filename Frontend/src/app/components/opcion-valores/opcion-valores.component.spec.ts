import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionValoresComponent } from './opcion-valores.component';

describe('OpcionValoresComponent', () => {
  let component: OpcionValoresComponent;
  let fixture: ComponentFixture<OpcionValoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpcionValoresComponent]
    });
    fixture = TestBed.createComponent(OpcionValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
