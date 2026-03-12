import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsListComponent } from './investments-list';

describe('InvestmentsList', () => {
  let component: InvestmentsListComponent;
  let fixture: ComponentFixture<InvestmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentsListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
