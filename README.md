# BISS-Blockchain

## Usage

### 1. Generate new account
One account for one device

```json
{"method": "personal_newAccount", "params": ["passphrase"]}
```

https://docs.klaytn.com/api/management.html#personal_newaccount

### 2. Unlock account

```json
{"method": "personal_unlockAccount", "params": ["address", "passphrase", 300]}
```

https://docs.klaytn.com/api/management.html#personal_unlockaccount

### 3. Send smart contract transaction
Refer to `./test.js`

```js
Transmission.methods._save('DATA').send({from: 'ADDRESS'})
```

## How to deploy & test

### 1. Generate new account or use any account & Unlock
Change address in `./blockchain/truffle.js`, `./blockchain/truffle.js`

### 2. Deploy smart contract on network

```bash
$ cd blockchain
$ truffle deploy --network klaytn --reset
```

Get `Transmission` smart contract address from output

### 3. Modify `test.js`
Modify smart contract address and sender address in `test.js` and run with `node test.js`
