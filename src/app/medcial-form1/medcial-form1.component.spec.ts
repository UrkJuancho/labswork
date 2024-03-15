import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcialForm1Component } from './medcial-form1.component';

describe('MedcialForm1Component', () => {
  let component: MedcialForm1Component;
  let fixture: ComponentFixture<MedcialForm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedcialForm1Component]
    });
    fixture = TestBed.createComponent(MedcialForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
