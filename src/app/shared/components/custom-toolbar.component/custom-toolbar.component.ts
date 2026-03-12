import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'app-custom-toolbar',
  imports: [MatToolbarModule, CommonModule],
  templateUrl: './custom-toolbar.component.html',
  styleUrl: './custom-toolbar.component.css',
})
export class CustomToolbarComponent {
  balance = signal<number>(0);
}
