export interface Subscription {
  id: string,
  fundId: number,
  fundName: string,
  fundCategory: 'FPV' | 'FIC',
  amount: number
  date: Date
}