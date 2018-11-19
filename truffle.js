// truffle.js
module.exports = {
  networks: {
      klaytn: {
          host: 'ubuntu.hanukoon.com',
          port: 8551,
          from: '0x81733c8d5ee8c76241c33537c072cd05d71b3d21',
          network_id: '1000',
          gas:      20000000,
          gasPrice: 25000000000,
      },
  },
};
