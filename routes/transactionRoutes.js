const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

// Add Transaction
router.post('/', (req, res) => {
    Transaction.create(req.body, (err, transaction) => {
        if (err) {
            return res.status(400).json({ error: 'Failed to create transaction.' });
        }
        res.status(201).json(transaction);
    });
});

// Get All Transactions
router.get('/', (req, res) => {
    Transaction.getAll((err, transactions) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve transactions.' });
        }
        res.json(transactions);
    });
});

// Get Transaction by ID
router.get('/:id', (req, res) => {
    Transaction.getById(req.params.id, (err, transaction) => {
        if (err) {
            return res.status(404).json({ error: 'Transaction not found.' });
        }
        res.json(transaction);
    });
});

// Update Transaction
router.put('/:id', (req, res) => {
    Transaction.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(400).json({ error: 'Failed to update transaction.' });
        }
        res.status(204).send();
    });
});

// Delete Transaction
router.delete('/:id', (req, res) => {
    Transaction.delete(req.params.id, (err) => {
        if (err) {
            return res.status(404).json({ error: 'Transaction not found.' });
        }
        res.status(204).send();
    });
});

module.exports = router;
