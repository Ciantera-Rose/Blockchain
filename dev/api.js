const express = require('express');
const app = express();

app.get('/blockchain', function (req, res) {});

app.post('/transaction', function (req, res) {});

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
