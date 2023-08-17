import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoDetailsComponent } from './prestamo-details.component';

describe('PrestamoDetailsComponent', () => {
  let component: PrestamoDetailsComponent;
  let fixture: ComponentFixture<PrestamoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamoDetailsComponent]
    });
    fixture = TestBed.createComponent(PrestamoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
