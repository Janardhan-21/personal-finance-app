export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};

export const calculateBudgetLimit = (income: number, expenses: number): number => {
    return income - expenses;
};

export const categorizeExpense = (expense: { category: string }): string => {
    const categories = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Other'];
    return categories.includes(expense.category) ? expense.category : 'Other';
};