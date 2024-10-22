const db = require('../database');

class Transaction {
    static create(transaction, callback) {
        const { type, category, amount, date, description } = transaction;
        db.run(`INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`, 
            [type, category, amount, date, description], 
            function(err) {
                callback(err, { id: this.lastID, ...transaction });
            });
    }

    static getAll(callback) {
        db.all(`SELECT * FROM transactions`, [], callback);
    }

    static getById(id, callback) {
        db.get(`SELECT * FROM transactions WHERE id = ?`, [id], callback);
    }

    static update(id, transaction, callback) {
        const { type, category, amount, date, description } = transaction;
        db.run(`UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`, 
            [type, category, amount, date, description, id], callback);
    }

    static delete(id, callback) {
        db.run(`DELETE FROM transactions WHERE id = ?`, [id], callback);
    }
}

module.exports = Transaction;
