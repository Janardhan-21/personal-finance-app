import React from 'react';

const BudgetSummary: React.FC = () => {
    // Sample budget data
    const budgetData = {
        totalIncome: 5000,
        totalExpenses: 3000,
        remainingBudget: 2000,
    };

    return (
        <div className="budget-summary">
            <h2>Budget Summary</h2>
            <div className="summary-item">
                <h3>Total Income</h3>
                <p>${budgetData.totalIncome}</p>
            </div>
            <div className="summary-item">
                <h3>Total Expenses</h3>
                <p>${budgetData.totalExpenses}</p>
            </div>
            <div className="summary-item">
                <h3>Remaining Budget</h3>
                <p>${budgetData.remainingBudget}</p>
            </div>
        </div>
    );
};

export default BudgetSummary;