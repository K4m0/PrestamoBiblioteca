import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrestamoComponent } from './create-prestamo.component';

describe('CreatePrestamoComponent', () => {
  let component: CreatePrestamoComponent;
  let fixture: ComponentFixture<CreatePrestamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePrestamoComponent]
    });
    fixture = TestBed.createComponent(CreatePrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
