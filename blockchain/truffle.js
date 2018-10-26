// truffle.js
module.exports = {
  networks: {
      klaytn: {
          host: '127.0.0.1',
          port: 8551,
          from: '0x4543553d76289473c6d38fadfd4f13541bf43c19', // enter your publickey
          network_id: '1000', // Aspen network id
          gas: 20000000, // transaction gas limit
          gasPrice: 25000000000, // gasPrice of Aspen is 25 Gpeb
      },
  },
};
