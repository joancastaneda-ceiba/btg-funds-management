import { Component, OnInit, signal } from '@angular/core';
import { Fund } from '../../../core/models/fund.model';
import { FundService } from '../../../core/services/fund/fund.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-fund-list',
  imports: [MatCardModule, MatButtonModule, MatTooltipModule, MatIconModule, CommonModule],
  templateUrl: './fund-list.html',
  styleUrl: './fund-list.css',
})
export class FundListComponent implements OnInit {
  funds = signal<Fund[]>([]);

  constructor(private service: FundService) { }

  ngOnInit(): void {
    this.service.GetAll().subscribe({
      next: (funds) => { this.funds.set([...funds]); console.log(this.funds); },
      error: (err) => console.error(err)
    });
  }

  subscribe(fund: Fund) {
    console.log("Suscribirse a", fund.name)
  }

}
