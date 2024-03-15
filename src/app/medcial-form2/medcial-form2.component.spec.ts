import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcialForm2Component } from './medcial-form2.component';

describe('MedcialForm2Component', () => {
  let component: MedcialForm2Component;
  let fixture: ComponentFixture<MedcialForm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedcialForm2Component]
    });
    fixture = TestBed.createComponent(MedcialForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
