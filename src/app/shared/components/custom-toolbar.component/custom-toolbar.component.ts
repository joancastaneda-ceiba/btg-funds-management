import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FundStore } from '../../../core/stores/fund.store';

@Component({
  standalone: true,
  selector: 'app-custom-toolbar',
  imports: [MatToolbarModule, CommonModule],
  templateUrl: './custom-toolbar.component.html',
  styleUrl: './custom-toolbar.component.css',
})
export class CustomToolbarComponent {
  constructor(public fundStore: FundStore) { }
}
