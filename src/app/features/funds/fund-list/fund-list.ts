import { Component, inject, OnInit, signal } from '@angular/core';
import { Fund } from '../../../core/models/fund.model';
import { FundService } from '../../../core/services/fund/fund.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from '../../../shared/components/dashboard.component/dashboard.component';
import { FundStore } from '../../../core/stores/fund.store';
import { MatDialog } from '@angular/material/dialog';
import { FundSubscribeDialog } from '../fund-subscribe-dialog/fund-subscribe-dialog';

@Component({
  standalone: true,
  selector: 'app-fund-list',
  imports: [MatCardModule, MatButtonModule, MatTooltipModule, MatIconModule, CommonModule, DashboardComponent],
  templateUrl: './fund-list.html',
  styleUrl: './fund-list.css',
})
export class FundListComponent implements OnInit {
  funds = signal<Fund[]>([]);
  readonly dialog = inject(MatDialog);

  constructor(private service: FundService, private fundStore: FundStore) { }

  ngOnInit(): void {
    this.service.GetAll().subscribe({
      next: (funds) => { this.funds.set([...funds]); console.log(this.funds); },
      error: (err) => console.error(err)
    });
  }

  openSubscriptionDialog(fund: Fund) {
    const dialogRef = this.dialog.open(FundSubscribeDialog, { data: fund });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fundStore.subscribeToFund(fund, result.amount(), result.notification())
      }
    });
  }
}
