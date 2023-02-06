// constructor function: to create multiple object


const Blockchain = require('./blockchain');

const bitcoin  = new Blockchain();

// bitcoin.createNewBlock(1234,"E34NHSSHLI34DKSLPREV",'NEWHASH23453');
// bitcoin.createNewBlock(343,"jdskfs",'adsf');


// bitcoin.createNewTransection(1200,'senderaddressssdummyhash','recipietendadressdummyhash');
// bitcoin.createNewTransection(1000,'senderaddressssdummyhashtrans2','recipietendadressdummyhashtrans2');

// bitcoin.createNewBlock(5645,'prevblockdsfejdkd','dnjkskkd')

// bitcoin.createNewTransection(1500,'senderaddressssdummyhashtrans2','recipietendadressdummyhashtrans2');

// bitcoin.createNewBlock(56743,'prevblockdsfejdkd','dnjkskkd')


const prevBlockHash = "ADIDKEKIDHIEKDIOJCADFIE5";
const currentBlockData = [
    {
        amount: 10,
        sender: 'FAKDIEKDILAIENYPQIEF3',
        recipient: 'SHAKEIDKLKD2ICLLIEKC'
    },
    {
        amount: 20,
        sender: 'IEKDILAIFAKDENYPQIEF',
        recipient: 'SKEIDKLHAKDICLLIEKC'
    }
];

// const nonce = 12345;

// bitcoin.hashBlock(prevBlockHash,currentBlockData,nonce)


// console.log(bitcoin.chain,'bitcoin')
// console.log(bitcoin.hashBlock(prevBlockHash,currentBlockData,nonce),'hashhh')

// console.log(bitcoin.proofOfWork(prevBlockHash,currentBlockData))




// proof of work runs and its give correct nonce


console.log(bitcoin.hashBlock(prevBlockHash,currentBlockData,3477))

// Genesis BLock : previous block hash
// how to create : if blockchain call first block will add 
/* collesion resistance  */ 

// hash:000026ad3fb6d501186046c32590ec251d712da65907bba38f7d300a0c1c57c3
// proof of work:3477



// console.log(bitcoin,'bitcoin')