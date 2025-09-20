import React from 'react';
import { Bar } from 'react-chartjs-2';

const dummyExpenses = [
  { category: 'Food', amount: 100 },
  { category: 'Transport', amount: 50 }
];

const Charts: React.FC = () => {
    const expenses = dummyExpenses; // Replace with real data later

    const data = {
        labels: expenses.map(expense => expense.category),
        datasets: [
            {
                label: 'Expenses',
                data: expenses.map(expense => expense.amount),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <Bar data={data} />
        </div>
    );
};

export default Charts;