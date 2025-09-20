import React from 'react';
import { Expense } from '../../types';

interface ExpenseItemProps {
    expense: Expense;
    onDelete: (id: string) => void;
    onEdit: (expense: Expense) => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, onDelete, onEdit }) => (
    <li>
        <span>{expense.category}: ${expense.amount}</span>
        <button onClick={() => onEdit(expense)}>Edit</button>
        <button onClick={() => onDelete(expense.id)}>Delete</button>
    </li>
);

export default ExpenseItem;