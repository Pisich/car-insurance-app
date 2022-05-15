import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasFormComponent } from './polizas-form.component';

describe('PolizasFormComponent', () => {
  let component: PolizasFormComponent;
  let fixture: ComponentFixture<PolizasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
