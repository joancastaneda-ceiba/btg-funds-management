import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Fund } from '../../../core/models/fund.model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-fund-subscribe-dialog',
  imports: [CommonModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatOptionModule, MatButtonModule, MatSelectModule],
  templateUrl: './fund-subscribe-dialog.html',
  styleUrl: './fund-subscribe-dialog.css',
})
export class FundSubscribeDialog {
  amount = signal(0);
  notification = signal('EMAIL');

  readonly dialogRef = inject(MatDialogRef<FundSubscribeDialog>);
  readonly data = inject<Fund>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm() {

    if (this.amount() < this.data.minimumAmount) return;

    this.dialogRef.close({
      amount: this.amount,
      notification: this.notification
    });

  }
}
