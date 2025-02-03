const express = require('express');
const pool = require('./db');
const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        const { page = 1, limit = 10, sortBy = 'created_at', order = 'ASC', age } = req.query;
        const offset = (page - 1) * limit;

        let query = `SELECT * FROM users`;
        const params = [];
        
        if (age) {
            query += ` WHERE age = $1`;
            params.push(age);
        }

        query += ` ORDER BY ${sortBy} ${order} LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
        params.push(limit, offset);

        const { rows } = await pool.query(query, params);
        res.json(rows);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// exportando el enrutador
module.exports = router;