export interface Expense {
    id: string;
    category: string;
    amount: number;
    date: string;
    notes?: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
}

export interface Budget {
    totalIncome: number;
    totalExpenses: number;
    remaining: number;
}

export interface AuthResponse {
    token: string;
    user: User;
}