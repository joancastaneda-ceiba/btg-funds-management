import { Injectable, signal } from "@angular/core";
import { Transaction } from "../models/transaction.model";
import { Fund } from "../models/fund.model";


@Injectable({
    providedIn: 'root'
})
export class FundStore {
    balance = signal(500000);
    transactions = signal<Transaction[]>([]);

    subscriptions = signal<any[]>([]);

    subscribeToFund(fund: Fund) {

        console.log('subscribe');
        if (this.balance() < fund.minimumAmount) {
            throw new Error('Saldo insuficiente');
        }

        this.balance.update(v => v - fund.minimumAmount);

        this.subscriptions.update(list => [
            ...list,
            fund
        ]);

        this.transactions.update(list => [
            ...list,
            {
                id: crypto.randomUUID(),
                type: 'SUBSCRIPTION',
                fundId: fund.id,
                fundName: fund.name,
                amount: fund.minimumAmount,
                date: new Date()
            }
        ]);

    }
}