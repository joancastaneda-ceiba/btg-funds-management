import { Component } from '@angular/core';
import { FundStore } from '../../../core/stores/fund.store';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from '../../../core/models/susbcription.model';

@Component({
  selector: 'app-investments-list',
  imports: [CommonModule, MatIconModule, MatCardModule, MatTooltipModule, MatButtonModule],
  templateUrl: './investments-list.html',
  styleUrl: './investments-list.css',
})
export class InvestmentsListComponent {
  constructor(public fundStore: FundStore) { }

  cancelInvestment(fund: Subscription) {
  this.fundStore.cancelFund(fund);
}
}
