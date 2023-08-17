import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoFormComponent } from './prestamo-form.component';

describe('PrestamoFormComponent', () => {
  let component: PrestamoFormComponent;
  let fixture: ComponentFixture<PrestamoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamoFormComponent]
    });
    fixture = TestBed.createComponent(PrestamoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
