const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
});

app.post('/transaction', function (req, res) {
  const blockIndex = bitcoin.createNewTransaction(
    req.body.amount,
    req.body.sender,
    req.body.recipient
  );
  res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});
// Gets back transaction will be added in block 2, genesis block aleady initiated
/*
Test Blockchain endpoint
  {
"chain": [
{
"index": 1,
"timestamp": 1614732767270,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
}
],
"pendingTransactions": [
{
"amount": 300,
"sender": "0AHOA00AFNABVJHHOF9S6S9YSA",
"recipient": "AS986V98AYVOA806706707"
}
]
}

  */

app.get('/mine', function (req, res) {});

app.listen(3000, function () {
  console.log('listening on port 3000');
});

// Build out an API that allows you to interact with and add data to the Blockchain
// Create a server using the Express.js library
// Build out endpoints to interact with Blockchain

// ENDPOINTS:
// fetch entire blockchain to look at data inside of it
//  app.get(‘/blockchain’, function (req, res) {})

// create a new transaction
// app.post(‘/transaction’, function (req, res) {})

// mine a new block by using the proof of work method
// app.get(‘/mine’, function (req, res) {})
