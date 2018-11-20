const wallet = '0x81733c8d5ee8c76241c33537c072cd05d71b3d21'

var Caver = require('caver-js');
var caver = new Caver('http://ubuntu.hanukoon.com:8551/');
caver.klay.unlockAccount(wallet, '_labc', 30000);
var Biss = require('./build/contracts/Biss.json');
var Biss = new caver.klay.Contract(Biss.abi, '0x58438a0b9ddc04aec7a03c5d470ac59230f35233');

// saveData : ASDF
Biss.methods.saveData('ASDF').send({from: wallet})

// loadData
Biss.methods.loadData(wallet).call().then(console.log) // ASDF

// saveKey : tHisIsS3cretKey
Biss.methods.saveKey(1, 'tHisIsS3cretKey').send({from: wallet})
.on('receipt', function(receipt) {
    // console.log(receipt);
    var transactionHash = receipt.transactionHash; // Get transactionHash from receipt
    // console.log(transactionHash);
    caver.klay.getTransaction(transactionHash).then(function(transaction) {
        console.log(transaction.input); // Get transaction.input(hex)
    });
});

// saveHash : c4ca4238a0b923820dcc509a6f75849b
Biss.methods.saveHash(1, 'c4ca4238a0b923820dcc509a6f75849b').send({from: wallet});

// verifyHash #1(false)
Biss.methods.verifyHash(1, 'cfcd208495d565ef66e7dff9f98764da').call().then(console.log); // 0x0000000000000000000000000000000000000000000000000000000000000000

//verifyHash #2(true)
Biss.methods.verifyHash(1, 'c4ca4238a0b923820dcc509a6f75849b').call().then(console.log); // true
