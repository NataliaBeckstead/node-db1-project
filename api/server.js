const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get('/api/accounts', (req, res) => {
    db('accounts')
        .then(accounts => {
            res.status(200).json({ data: accounts})
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message});
        })
});

module.exports = server;
