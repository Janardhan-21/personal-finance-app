import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const logExpense = async (expenseData: any) => {
    try {
        const response = await axios.post(`${API_URL}/expenses`, expenseData);
        return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error('Error logging expense: ' + error.message);
        }
        throw error;
    }
};

export const getExpenses = async (userId: string) => {
    try {
        const response = await axios.get(`${API_URL}/expenses/${userId}`);
        return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error('Error fetching expenses: ' + error.message);
        }
        throw error;
    }
};

export const getUserData = async (userId: string) => {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}`);
        return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error('Error fetching user data: ' + error.message);
        }
        throw error;
    }
};