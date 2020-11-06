const express = require('express');
const Postgres = require('postgres');
const morgan = require('morgan');
const app = express();
const {
    pool
} = require('./dbConnection');

app.set("view engine", "ejs");
app.use(morgan("dev"));


app.get("/", async (req, res) => {
    return res.render("index");
});

app.post("/", async (req, res) => {
    const searchKey = "%" + req.query.key + "%";
    const {
        rows
    } = await pool.query("SELECT name FROM testingTable WHERE name LIKE $1 LIMIT 15;", [searchKey]);

    console.log('rows :>> ', rows);
    return res.json({
        searchKey,
        results: rows
    })
});

app.listen(3000, () => console.log("server listening on 3000"));