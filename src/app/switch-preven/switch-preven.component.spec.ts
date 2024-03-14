import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchPrevenComponent } from './switch-preven.component';

describe('SwitchPrevenComponent', () => {
  let component: SwitchPrevenComponent;
  let fixture: ComponentFixture<SwitchPrevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchPrevenComponent]
    });
    fixture = TestBed.createComponent(SwitchPrevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
