export interface Transaction {
  id: string;
  title: string;
  category: string;
  amount: number;
  date: string;
  type: 'debit' | 'credit';
  merchant: string;
  status: 'completed' | 'pending';
  description?: string;
}

export interface WalletData {
  cardBalance: number;
  dailyPoints: number;
  paymentsDue: boolean;
}

export const walletData: WalletData = {
  cardBalance: 2458.75,
  dailyPoints: 125,
  paymentsDue: false,
};

export const transactions: Transaction[] = [
  {
    id: '1',
    title: 'Apple',
    category: 'Food & Dining',
    amount: 5.75,
    date: '2025-10-24T09:30:00',
    type: 'debit',
    merchant: 'Starbucks',
    status: 'completed',
    description: 'Grande Latte at Main Street location',
  },
  {
    id: '2',
    title: 'Apple',
    category: 'Income',
    amount: 3500.00,
    date: '2025-10-23T08:00:00',
    type: 'credit',
    merchant: 'ABC Company Inc',
    status: 'completed',
    description: 'Monthly salary payment for October',
  },
  {
    id: '3',
    title: 'Apple',
    category: 'Shopping',
    amount: 89.99,
    date: '2025-10-22T14:20:00',
    type: 'debit',
    merchant: 'Amazon',
    status: 'completed',
    description: 'Wireless headphones and USB cable for the new MacBook Pro',
  },
  {
    id: '4',
    title: 'Apple',
    category: 'Transportation',
    amount: 15.50,
    date: '2025-10-21T18:45:00',
    type: 'debit',
    merchant: 'Uber',
    status: 'completed',
    description: 'Ride from downtown to home',
  },
  {
    id: '5',
    title: 'Apple',
    category: 'Entertainment',
    amount: 15.99,
    date: '2025-10-20T00:01:00',
    type: 'debit',
    merchant: 'Netflix',
    status: 'completed',
    description: 'Monthly subscription fee',
  },
  {
    id: '6',
    title: 'Apple',
    category: 'Food & Dining',
    amount: 127.45,
    date: '2025-10-19T16:30:00',
    type: 'debit',
    merchant: 'Whole Foods',
    status: 'completed',
    description: 'Weekly grocery shopping at the new Whole Foods Market downtown',
  },
  {
    id: '7',
    title: 'Apple',
    category: 'Health & Fitness',
    amount: 49.99,
    date: '2025-10-18T07:00:00',
    type: 'debit',
    merchant: 'FitLife Gym',
    status: 'pending',
    description: 'Monthly membership fee',
  },
  {
    id: '8',
    title: 'Apple',
    category: 'Income',
    amount: 850.00,
    date: '2025-10-17T10:15:00',
    type: 'credit',
    merchant: 'XYZ Client',
    status: 'completed',
    description: 'Website development project payment for the React app',
  },
];
