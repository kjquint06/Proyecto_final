import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionComponent } from './generacion.component';

describe('GeneracionComponent', () => {
  let component: GeneracionComponent;
  let fixture: ComponentFixture<GeneracionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneracionComponent]
    });
    fixture = TestBed.createComponent(GeneracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
