import { Component, OnInit, signal } from '@angular/core';
import { Fund } from '../../../core/models/fund.model';
import { FundService } from '../../../core/services/fund/fund.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from '../../../shared/components/dashboard.component/dashboard.component';
import { FundStore } from '../../../core/stores/fund.store';

@Component({
  standalone: true,
  selector: 'app-fund-list',
  imports: [MatCardModule, MatButtonModule, MatTooltipModule, MatIconModule, CommonModule, DashboardComponent],
  templateUrl: './fund-list.html',
  styleUrl: './fund-list.css',
})
export class FundListComponent implements OnInit {
  funds = signal<Fund[]>([]);

  constructor(private service: FundService, private fundStore: FundStore) { }

  ngOnInit(): void {
    this.service.GetAll().subscribe({
      next: (funds) => { this.funds.set([...funds]); console.log(this.funds); },
      error: (err) => console.error(err)
    });
  }

  subscribe(fund: Fund) {
    this.fundStore.subscribeToFund(fund);
  }

}
