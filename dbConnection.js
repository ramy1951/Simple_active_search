const {
    Pool
} = require('pg');

const pool = new Pool({
    connectionString: process.env.POSTGRES_CONNECTON_URL
});

pool.connect((err, client) => {
    if (!err) return console.log("DB CONNECTED!")
    console.log('err connecting to:>> ', err);
});

module.exports = {
    pool
}