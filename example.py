from klaytn import *

klay = Klaytn('http://klaytn.ngrok.io')

wallet = klay.newAccount('_labc') # create newAccount with '_labc' as passphrase
print(wallet)

print(klay.unlockAccount(wallet, '_labc', 30000)) # wallet to unlock, pass, time to unlock(sec)

print(klay.sendData(wallet, 'so what?')) # return txHash
