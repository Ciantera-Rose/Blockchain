const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(1763, 'OUN90SGJ90N', '90SFDSVA9F09008N');
bitcoin.createNewBlock(1395, 'OIFHW990FSN', 'NCAOI907FADV00VD');
bitcoin.createNewBlock(8974, 'OUN90SGJ90N', 'SBN9S7VA69FV6A9F');

console.log(bitcoin);

//Outputs:

// Blockchain { chain: [], newTransasctions: [] }

/*

Blockchain data structure and chain property with 3 block (objects):

Blockchain {
  chain: [
    {
      index: 1,
      timestamp: 1614223560848,
      transactions: [],
      nonce: 1763,
      hash: '90SFDSVA9F09008N',
      previousBlockHash: 'OUN90SGJ90N'
    },
    {
      index: 2,
      timestamp: 1614223560848,
      transactions: [],
      nonce: 1395,
      hash: 'NCAOI907FADV00VD',
      previousBlockHash: 'OIFHW990FSN'
    },
    {
      index: 3,
      timestamp: 1614223560848,
      transactions: [],
      nonce: 8974,
      hash: 'SBN9S7VA69FV6A9F',
      previousBlockHash: 'OUN90SGJ90N'
    }
  ],
  newTransasctions: [],
  newTransactions: []
}

*/
