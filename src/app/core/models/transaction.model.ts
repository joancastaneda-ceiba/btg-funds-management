export interface Transaction {
  id: string;
  fundId: number;
  fundName: string;
  amount: number;
  type: 'SUBSCRIPTION' | 'CANCEL';
  date: Date;
  notificationMethod?: 'EMAIL' | 'SMS';
}