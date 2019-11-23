import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmaHistoryComponent } from './bma-history.component';

describe('BmaHistoryComponent', () => {
  let component: BmaHistoryComponent;
  let fixture: ComponentFixture<BmaHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmaHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmaHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
