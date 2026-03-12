import { Routes } from '@angular/router';
import { FundListComponent } from './features/funds/fund-list/fund-list';
import { TransactionHistoryComponent } from './features/transactions/transaction-history/transaction-history';
import { InvestmentsListComponent } from './features/investments/investments-list/investments-list';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'funds',
        pathMatch: 'full'
    },
    {
        path:'funds',
        component: FundListComponent
    },
    {
        path:'transactions',
        component: TransactionHistoryComponent
    },
    {
        path: 'investments',
        component: InvestmentsListComponent
    }
];
