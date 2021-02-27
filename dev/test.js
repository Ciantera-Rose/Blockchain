const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = '0H986Y9OHBO89689Y8960Y89BL';
const currentBlockData = [
  {
    amount: 10,
    sender: 'JJP98097NY790800JUHOSOHA',
    recipient: 'AOHIHOSF897DS097G0S0S'
  },
  {
    amount: 20,
    sender: 'MVJDOSIHO97NY700JUHOVNDKI',
    recipient: 'ADNSBF9790S08DS70SSL0707'
  },
  {
    amount: 300,
    sender: 'JJJS08D7V0DS98S9FDG0SG8S',
    recipient: 'NOSNVDWHRHPIPS87060SV00S'
  }
];

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 65547));

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
// nonce = 65547 (took 65,547 iterations for proofOfWork function to find a hash that starts with four '0000')

// =======================================================================

//const nonce = 100;

//console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
// c0e4180811bd3cc7bca3df4bb22441b373f57283a8f2a457b7ac0ac7031fcc27

// bitcoin.createNewBlock(1974, '0000BFWI7965', '0000BNDKJ896AA0');

// bitcoin.createNewTransaction(50, 'CIAN0000AOUL3', 'ALAN0000DBAGO8');

// bitcoin.createNewBlock(0210, '0000KABDALFA', '0000HF087FW00WF');

// bitcoin.createNewTransaction(1000, 'RYAN0000VDG3', 'CIAN0000GBSRH4');
// bitcoin.createNewTransaction(10, 'RED0000ARGAZR634', 'DANA0000VSABD3');
// bitcoin.createNewTransaction(15, 'HALLIE0000NGOA0', 'SEAN0000NAFNA08');

// bitcoin.createNewBlock(0024, '0000BKSBFGSOW', '0000NVE8FWHNLS');

// console.log(bitcoin.chain[2]);

// Outputs:

/*

Blockchain {
  chain: [
    {
      index: 1,
      timestamp: 1614229072380,
      transactions: [],
      nonce: 1974,
      hash: '0000BNDKJ896AA0',
      previousBlockHash: '0000BFWI7965'
    }
  ],
  pendingTransasctions: [],
  pendingTransactions: [
    {
      amount: 50,
      sender: 'CIAN0000AOUL3',
      recipient: 'ALAN0000DBAGO8'
    }
  ]
}
*/

/*

Blockchain {
  chain: [
    {
      index: 1,
      timestamp: 1614229682515,
      transactions: [],
      nonce: 1974,
      hash: '0000BNDKJ896AA0',
      previousBlockHash: '0000BFWI7965'
    },
    {
      index: 2,
      timestamp: 1614229682515,
      transactions: [Array],
      nonce: 136,
      hash: '0000HF087FW00WF',
      previousBlockHash: '0000KABDALFA'
    }
  ],
  pendingTransactions: []
}

===========================================================================

Cianteras-MBP:blockchain cianterajeanetterose$ node dev/test.js
Look inside array at 2nd block in the chain for transaction array with object: 

{
  index: 2,
  timestamp: 1614229753685,
  transactions: [
    {
      amount: 50,
      sender: 'CIAN0000AOUL3',
      recipient: 'ALAN0000DBAGO8'
    }
  ],
  nonce: 136,
  hash: '0000HF087FW00WF',
  previousBlockHash: '0000KABDALFA'
}

===========================================================================
Blockchain {
  chain: [
    {
      index: 1,
      timestamp: 1614230563837,
      transactions: [],
      nonce: 1974,
      hash: '0000BNDKJ896AA0',
      previousBlockHash: '0000BFWI7965'
    },
    {
      index: 2,
      timestamp: 1614230563837,
      transactions: [Array],
      nonce: 136,
      hash: '0000HF087FW00WF',
      previousBlockHash: '0000KABDALFA'
    }
  ],
  pendingTransactions: [
    {
      amount: 1000,
      sender: 'RYAN0000VDG3',
      recipient: 'CIAN0000GBSRH4'
    },
    {
      amount: 10,
      sender: 'RED0000ARGAZR634',
      recipient: 'DANA0000VSABD3'
    },
    {
      amount: 15,
      sender: 'HALLIE0000NGOA0',
      recipient: 'SEAN0000NAFNA08'
    }
  ]
}

====================================================================

Cianteras-MBP:blockchain cianterajeanetterose$ node dev/test.js
Pending transactions pushed/created when new block mined

{
  index: 3,
  timestamp: 1614230936095,
  transactions: [
    {
      amount: 1000,
      sender: 'RYAN0000VDG3',
      recipient: 'CIAN0000GBSRH4'
    },
    {
      amount: 10,
      sender: 'RED0000ARGAZR634',
      recipient: 'DANA0000VSABD3'
    },
    {
      amount: 15,
      sender: 'HALLIE0000NGOA0',
      recipient: 'SEAN0000NAFNA08'
    }
  ],
  nonce: 20,
  hash: '0000NVE8FWHNLS',
  previousBlockHash: '0000BKSBFGSOW'
}

*/
