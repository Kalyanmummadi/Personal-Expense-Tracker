Personal-Expense-Tracker-API
A simple RESTful API built with Node.js, Express.js, and SQLite to manage personal financial records. Users can record income, expenses, retrieve past transactions, and view summaries.

Features Add, view, update, and delete transactions. Get summaries of income and expenses. SQLite database used for simplicity. Setup and Run Instructions Prerequisites Node.js installed on your machine. SQLite (already included in Node.js with sqlite3). Steps Clone the repository:

code:- git clone https://github.com/your-username/personal-expense-tracker.git Navigate into the project directory:

code:- cd personal-expense-tracker Install dependencies:

code npm install Run the server:

code node app.js The API will now be running on http://localhost:3000.

API Documentation

Add a Transaction POST /transactions
Description: Adds a new income or expense transaction. Request Body: json code { "type": "income/expense", "category": "category_name", "amount": 100, "date": "YYYY-MM-DD", "description": "optional description" } Response: json code { "id": 1 } 2. Get All Transactions GET /transactions

Description: Retrieves all transactions. Response: json code [ { "id": 1, "type": "income", "category": "salary", "amount": 5000, "date": "2024-10-10", "description": "October salary" }, ... ] 3. Get Transaction by ID GET /transactions/

Description: Retrieves a transaction by its ID. Response: json code { "id": 1, "type": "income", "category": "salary", "amount": 5000, "date": "2024-10-10", "description": "October salary" } 4. Update a Transaction PUT /transactions/

Description: Updates a transaction by its ID. Request Body: json code { "type": "income/expense", "category": "new_category", "amount": 200, "date": "YYYY-MM-DD", "description": "updated description" } Response: json code { "updatedID": 1 } 5. Delete a Transaction DELETE /transactions/

Description: Deletes a transaction by its ID. Response: json code { "message": "Transaction deleted successfully." } 6. Get Summary GET /summary

Description: Retrieves a summary of total income, total expenses, and balance. Response: json code { "totalIncome": 5000, "totalExpenses": 2000, "balance": 3000 } Postman Screenshots You can attach the screenshots of API calls using Postman for each of the above endpoints.

POST /transactions:

GET /transactions:

PUT /transactions/ :

DELETE /transactions/ :
