const express = require('express');
const accountsRouter = require('./data/accounts/accountsRouter');

// const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());
server.use('/api/accounts', accountsRouter);

server.get('/', (req, res) => {
  res.json({ Message: 'Accounts' });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ errorMessage: 'Error' });
});

module.exports = server;