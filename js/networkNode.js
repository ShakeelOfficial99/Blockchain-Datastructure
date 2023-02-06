const express = require('express');
const { v4: uuidv4 } = require('uuid');
const Blockchain = require('./blockchain');
const port = process.argv[2];
const bodyParser = require('body-parser')

 
const app = express();
const bitcoin = new Blockchain();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const nodeAddress = uuidv4().split('-').join('');

// get: data receive from the server , will give us a complete blockchain
app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
});

// clint to server - this is fo rcreating new transection 
app.post('/transection', function(req,res){
 const blockIndex = bitcoin.createNewTransection(req.body.amount,req.body.sender,req.body.recipient);
 res.json({note:`THis transection will be added in block  ${blockIndex}`})
})

// MIne a new block
app.get('/mine',function(req,res){

  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const currentBlockData = {
    transection:bitcoin.pendingTransaction,
    index:lastBlock['index'] + 1
  }

  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);

  const blockHash = bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce);

  bitcoin.createNewTransection(6, "000000",nodeAddress)

  const newBlock = bitcoin.createNewBlock(nonce,previousBlockHash,blockHash);

  res.json({
    note:"New Block mined successfully",
    block: newBlock
  })
})


app.get('/wallet',function(req,res){
  res.sendFile(__dirname + '/index.html')
})
app.post('/wallet',function(req,res){
  const blockIndex = bitcoin.createNewTransection(req.body.amount,req.body.senderAddress,req.body.recipientAddress);
  res.json({note:`THis transection will be added in block  ${blockIndex}`})
})
 


// bodyparser : 

app.listen(port, function(){
  console.log(`server is up and running on port ${port}`)
});

