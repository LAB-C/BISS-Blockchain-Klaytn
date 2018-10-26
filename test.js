var Caver = require('caver-js');
var caver = new Caver('http://127.0.0.1:8551');
caver.klay.getCode('0x20c0b6bc23bfcbe9dad09221f90365f740f779c9').then(console.log);

var Transmission = require('./blockchain/build/contracts/Transmission.json');
var Transmission = new caver.klay.Contract(Transmission.abi, '0x20c0b6bc23bfcbe9dad09221f90365f740f779c9');
Transmission.methods._save('test').send({from: '0x4543553d76289473c6d38fadfd4f13541bf43c19'}).then(console.log);
