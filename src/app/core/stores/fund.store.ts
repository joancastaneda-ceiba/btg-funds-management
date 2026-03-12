import { Injectable, signal } from "@angular/core";
import { Transaction } from "../models/transaction.model";
import { Fund } from "../models/fund.model";
import { Subscription } from "../models/susbcription.model";


@Injectable({
    providedIn: 'root'
})
export class FundStore {
    balance = signal(500000);
    transactions = signal<Transaction[]>([]);

    subscriptions = signal<Subscription[]>([]);

    cancelFund(subscription: Subscription) {
        this.subscriptions.update(list => list.filter(f => f.id != subscription.id))
        
        this.transactions.update(list => [
            ...list,
            {
                id: crypto.randomUUID(),
                type: 'CANCEL',
                fundId: subscription.fundId,
                fundName: subscription.fundName,
                amount: subscription.amount,
                date: new Date()
            }
        ]);

        this.balance.update(v => v + subscription.amount);
    }

    subscribeToFund(fund: Fund, amount: number, notification: 'EMAIL' | 'SMS') {
        if (this.balance() < fund.minimumAmount) {
            throw new Error('Saldo insuficiente');
        }

        let newDate = new Date();
        this.balance.update(v => v - amount);

        this.subscriptions.update(list => {

        const existing = list.find(s => s.fundId === fund.id);

        if (existing) {

            return list.map(s =>
                s.fundId === fund.id
                    ? { ...s, amount: s.amount + amount }
                    : s
            );

        }

        return [
            ...list,
            {
                id: crypto.randomUUID(),
                fundName: fund.name,
                fundId: fund.id,
                fundCategory: fund.category,
                amount,
                date: newDate
            }
        ];
    });

        this.transactions.update(list => [
            ...list,
            {
                id: crypto.randomUUID(),
                type: 'SUBSCRIPTION',
                fundId: fund.id,
                fundName: fund.name,
                amount:amount,
                date: newDate,
                notificationMethod: notification
            }
        ]);
    }
}