# Personal Finance App

## Overview
The Personal Finance App is a web application designed to help users track their expenses, categorize them, and gain insights into their budget through visual analytics. The application features user authentication, expense logging, and a responsive dashboard.

## Features
- User authentication (login and registration)
- Expense logging with categorization
- Dashboard displaying budget insights
- Visual analytics using graphs and charts
- Responsive design for mobile and desktop

## Technologies Used
- React for the frontend
- TypeScript for type safety
- Chart.js for data visualization
- AWS Cognito for user authentication
- CSS for styling

## Project Structure
```
personal-finance-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── Login.tsx
│   │   │   └── Register.tsx
│   │   ├── Dashboard
│   │   │   ├── Dashboard.tsx
│   │   │   └── BudgetSummary.tsx
│   │   ├── Expenses
│   │   │   ├── ExpenseForm.tsx
│   │   │   └── ExpenseList.tsx
│   │   └── Analytics
│   │       └── Charts.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── services
│   │   ├── api.ts
│   │   └── auth.ts
│   ├── utils
│   │   └── helpers.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd personal-finance-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage
- Register a new account or log in to an existing account.
- Use the dashboard to log expenses and view budget insights.
- Explore the analytics section for visual representations of your spending habits.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.