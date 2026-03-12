import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FundListComponent } from './features/funds/fund-list/fund-list';
import { CustomToolbarComponent } from './shared/components/custom-toolbar.component/custom-toolbar.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatTabsModule, CustomToolbarComponent, FundListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('btg-funds-management');
}
