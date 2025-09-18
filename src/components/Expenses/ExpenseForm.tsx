import React, { useState } from 'react';

const ExpenseForm = ({ onSubmit, expense }) => {
    const [category, setCategory] = useState(expense ? expense.category : '');
    const [date, setDate] = useState(expense ? expense.date : '');
    const [amount, setAmount] = useState(expense ? expense.amount : '');
    const [notes, setNotes] = useState(expense ? expense.notes : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = { category, date, amount, notes };
        onSubmit(newExpense);
        setCategory('');
        setDate('');
        setAmount('');
        setNotes('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Category</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Notes</label>
                <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
            </div>
            <button type="submit">Save Expense</button>
        </form>
    );
};

export default ExpenseForm;