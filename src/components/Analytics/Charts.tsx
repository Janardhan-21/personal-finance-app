import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from '../../types';

const Charts: React.FC = () => {
    const expenses = useSelector((state: RootState) => state.expenses);
    
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

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Expense Chart</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Charts;