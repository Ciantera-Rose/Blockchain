const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const { v1: uuidv1 } = require('uuid');
uuidv1();

const nodeAddress = uuidv1().split('-').join('');

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

app.get('/mine', function (req, res) {
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const currentBlockData = {
    transactions: bitcoin.pendingTransactions,
    index: lastBlock['index'] + 1
  };

  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = bitcoin.hashBlock(
    previousBlockHash,
    currentBlockData,
    nonce
  );

  bitcoin.createNewTransaction(6.25, '00', nodeAddress);

  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
  res.json({ note: 'New block mined successfully', block: newBlock });
});

/*

test endpoints:
http://localhost:3000/blockchain : blockchain
http://localhost:3000/mine: mines new block with corrent data and mining reward
http://localhost:3000/blockchain: see newBlock in the blockchain with mining reward
test additional mines...
test add transactions in postman to add to pending transactions in blockchain
test mine new block to get new transactions added to blockchain with miner reward
test post new transactions and create new blocks

{
"chain": [
{
"index": 1,
"timestamp": 1614737600412,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timestamp": 1614737734512,
"transactions": [
{
"amount": 6.25,
"sender": "00",
"recipient": "0648d6b17bc611ebbb080150966a6549"
}
],
"nonce": 18140,
"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
"previousBlockHash": "0"
}
],
"pendingTransactions": []
}

*/

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
