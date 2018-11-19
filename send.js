const wallet = '0x81733c8d5ee8c76241c33537c072cd05d71b3d21'

var Caver = require('caver-js');
var caver = new Caver('http://ubuntu.hanukoon.com:8551/');
var Biss = require('./build/contracts/Biss.json');
var Biss = new caver.klay.Contract(Biss.abi, '0xc5ae5f12a6d1a2bbccfd3d7138c51d1572bf2c36');
