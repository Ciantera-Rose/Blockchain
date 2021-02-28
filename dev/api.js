const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
  /* Test get genesis block

  {
"chain": [
{
"index": 1,
"timestamp": 1614495100093,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
}
],
"pendingTransactions": []
}

  */
});

app.post('/transaction', function (req, res) {
  console.log(req.body);
  res.send(`The amount of the transaction is ${req.body.amount} bitcoin`);

  /* Test req.body
   {
  amount: 100,
  sender: '0AHOA00AFNABVSWAID7SA69A',
  'recipient:': '0H767GVKGLGOY869600Y'
} 
*/
});

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
