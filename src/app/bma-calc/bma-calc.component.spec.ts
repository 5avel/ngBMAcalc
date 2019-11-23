import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmaCalcComponent } from './bma-calc.component';

describe('BmaCalcComponent', () => {
  let component: BmaCalcComponent;
  let fixture: ComponentFixture<BmaCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmaCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmaCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
