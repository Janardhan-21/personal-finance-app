import React from 'react';
import BudgetSummary from './BudgetSummary';
import ExpenseList from '../Expenses/ExpenseList';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <nav>
                <Link to="/add-expense">Add Expense</Link>
                <Link to="/analytics">View Analytics</Link>
            </nav>
            <BudgetSummary />
            <ExpenseList />
        </div>
    );
};

export default Dashboard;