const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'mi_basedatos',
    password: process.env.DB_PASSWORD || '12251225',
    port: process.env.DB_PORT || 5432,
});

module.exports = pool;