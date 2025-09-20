import React, { useState } from 'react';
import { Expense } from '../../types';

interface ExpenseFormProps {
    onSubmit: (expense: Partial<Expense>) => void;
    expense?: Expense;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit, expense }) => {
    const [category, setCategory] = useState(expense ? expense.category : '');
    const [date, setDate] = useState(expense ? expense.date : '');
    const [amount, setAmount] = useState(expense ? expense.amount : 0);
    const [notes, setNotes] = useState(expense ? expense.notes || '' : '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newExpense = { category, date, amount, notes };
        onSubmit(newExpense);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* ...inputs... */}
        </form>
    );
};

export default ExpenseForm;