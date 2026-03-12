import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Transaction } from '../../../core/models/transaction.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-history',
  imports: [CommonModule, MatTableModule],
  templateUrl: './transaction-history.html',
  styleUrl: './transaction-history.css',
})
export class TransactionHistoryComponent {

  transactions: Transaction[] = [];
  
  displayedColumns = ['date', 'fund', 'type', 'amount'];
}
