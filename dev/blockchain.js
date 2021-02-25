function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash
  };
  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
};

Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function (
  amount,
  sender,
  recipient
) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    recipient: recipient
  };
  this.pendingTransactions.push(newTransaction);

  return this.getLastBlock()['index'] + 1;
};

Blockchain.prototype.hashBlock = function () {
  // ... return "90HFW90EWN907FSG7SD0870607SD700SD7F"
};

// TODO
// use SHA256 hashing function
// Takes any text input and generates a new fixed length string on each keystroke

module.exports = Blockchain;
