import React from 'react';
import { Expense } from '../../types';
import ExpenseItem from './ExpenseItem';

interface ExpenseListProps {
    expenses: Expense[];
    onDelete: (id: string) => void;
    onEdit: (expense: Expense) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDelete, onEdit }) => {
    return (
        <div>
            <h2>Your Expenses</h2>
            {expenses.length === 0 ? (
                <p>No expenses logged yet.</p>
            ) : (
                <ul>
                    {expenses.map(expense => (
                        <ExpenseItem 
                            key={expense.id} 
                            expense={expense} 
                            onDelete={onDelete} 
                            onEdit={onEdit} 
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExpenseList;