const express = require('express');
const app = express();

const transactions = require('../mock/transactions.json');

app.get('/', (req, res) => {
  res.json({ foo: 'bar' });
});

app.get('/transactions', (req, res) => {
  res.json(transactions);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
