import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundSubscribeDialog } from './fund-subscribe-dialog';

describe('FundSubscribeDialog', () => {
  let component: FundSubscribeDialog;
  let fixture: ComponentFixture<FundSubscribeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundSubscribeDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(FundSubscribeDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
