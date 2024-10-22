const express = require('express');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactionRoutes');
const app = express();

app.use(bodyParser.json()); // Parse JSON requests
app.use('/transactions', transactionRoutes); // Use transaction routes

// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the Personal Expense Tracker API. Use /transactions to manage your expenses.');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
