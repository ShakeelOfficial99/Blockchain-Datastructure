const sha256 = require('sha256');

// console.log(SHA256,'SHA256');



// bitcoin one transection in 10 minutes.
// tenup transection in 1 minute.


// construstor function.
function Blockchain() {
    this.chain = [];
    this.pendingTransaction = [];

    this.createNewBlock(100,'0','0') //genesis block
}

// nonce : is a number - proff of work - is a ligtimate block
// hash : 

Blockchain.prototype.createNewBlock = function (nonce, prevBlockHash, hash) {

    // block properties.
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transections: this.pendingTransaction,
        nonce: nonce,
        prevBlockhASH: prevBlockHash,
        hash: hash

    };
    // if new block create then pending transaction will be empty.
    this.pendingTransaction = [];
    this.chain.push(newBlock);

    return newBlock;

}

// to access last block property - to secure 

Blockchain.prototype.getLastBlock = function () {
    return this.chain[this.chain.length - 1]
}

// create new transection

Blockchain.prototype.createNewTransection = function (amount, sender, recipient) {
    const newTransection = {
        amount: amount,
        sender: sender,
        recipient: recipient
    }
    this.pendingTransaction.push(newTransection);

    return this.getLastBlock()['index'] + 1;
}

// hashing algorithm
// SHA256 HASHING ALGORITHM : secure hash alogorthm  
// hash is a sequence of algorithm - a random string with fix length
// nonce came form proof of work

Blockchain.prototype.hashBlock = function (previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash +
        nonce.toString() + currentBlockData.toString() + 
        JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}


// proof of work: gives seurity to blockchain(collection of blocks). //ligtimate
// -  mining
/* what actually proof of work do? */
//it takes hash of sha256 - if a particular hash is not generated then proof of work is running 

Blockchain.prototype.proofOfWork = function (prevBlockHash, currentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(prevBlockHash, currentBlockData, nonce);

    while (hash.substring(0, 4) !== '0000') {
        nonce++;
        hash = this.hashBlock(prevBlockHash, currentBlockData, nonce)
        console.log(hash,'hash')
    }
    return nonce;
}




module.exports = Blockchain;