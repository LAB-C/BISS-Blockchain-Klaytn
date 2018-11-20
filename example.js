const wallet = '0x81733c8d5ee8c76241c33537c072cd05d71b3d21'

var Caver = require('caver-js');
var caver = new Caver('http://ubuntu.hanukoon.com:8551/');
caver.klay.unlockAccount(wallet, '_labc', 30000);
var Biss = require('./build/contracts/Biss.json');
var Biss = new caver.klay.Contract(Biss.abi, '0x17231a90f559f87ff1490c2eb8cec0c884d79a5d');

// saveData : ASDF
Biss.methods.saveData('asdf').send({from: wallet})
.on('receipt', function(receipt) {
    // console.log(receipt);
    var transactionHash = receipt.transactionHash; // Get transactionHash from receipt
    // console.log(transactionHash);
    caver.klay.getTransaction(transactionHash).then(function(transaction) {
        // console.log(transaction.input); // Get transaction.input(hex)
        console.log(caver.utils.hexToAscii(transaction.input)); // ÄjÒ asdf -> 앞에 있는 length 4짜리 'ÄjÒ ' 지우고 쓰기!
    });
});

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
