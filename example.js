const wallet = '0x81733c8d5ee8c76241c33537c072cd05d71b3d21'

var Caver = require('caver-js');
var caver = new Caver('http://ubuntu.hanukoon.com:8551/');
caver.klay.unlockAccount(wallet, '_labc', 30000);
var Biss = require('./build/contracts/Biss.json');
var Biss = new caver.klay.Contract(Biss.abi, '0xc5ae5f12a6d1a2bbccfd3d7138c51d1572bf2c36');

// saveKey : tHisIsS3cretKey
Biss.methods.saveKey(1, 'tHisIsS3cretKey').send({from: wallet});

// saveHash : c4ca4238a0b923820dcc509a6f75849b
Biss.methods.saveHash(1, 'c4ca4238a0b923820dcc509a6f75849b').send({from: wallet});

// loadKey
Biss.methods.loadKey(1).call().then(console.log); // tHisIsS3cretKey

// verifyHash #1(false)
Biss.methods.verifyHash(1, '0x34256756').call().then(console.log); // 0x0000000000000000000000000000000000000000000000000000000000000000

//verifyHash #2(true)
Biss.methods.verifyHash(1, 'c4ca4238a0b923820dcc509a6f75849b').call().then(console.log); // true
