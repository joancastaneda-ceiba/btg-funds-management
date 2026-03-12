import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Transaction } from '../../../core/models/transaction.model';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  balance = signal<number>(0);
  transactions = signal<Transaction[]>([])
  totalInvested = computed(() =>
    this.transactions()
      .filter(t => t.type === 'SUBSCRIPTION')
      .reduce((sum, t) => sum + t.amount, 0)
  );
  activeFunds = computed(() =>
    new Set(
      this.transactions()
        .filter(t => t.type === 'SUBSCRIPTION')
        .map(t => t.fundId)
    ).size
  );
}
