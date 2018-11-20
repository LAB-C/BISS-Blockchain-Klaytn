# BISS-Blockchain
Smart Contract used in BISS(Updated after Hackathon)

BISS 시스템에서 사용되는 스마트 컨트랙트입니다.

## 데이터 전송 및 수신
1. 디바이스는 자신의 Klaytn 지갑 주소를 sender로 sendData()를 호출하고, 돌아오는 receipt의 txHash를 서버로 보냅니다.
2. 서버는 txHash의 트랜잭션을 조회하고, 전송된 데이터를 구합니다.

### sendData
```js
Biss.methods.saveData('ASDF').send({from: '0x81733c8d5ee8c76241c33537c072cd05d71b3d21'})
```

#### 인수
| 이름        | 타입      | 설명        |
| :--------- | :------- | :--------- |
| `_message` | `string` | 전송할 메세지 |

### txHash에서 데이터 꺼내기
단순히 이런 기능만 필요한 서버 및 END 디바이스는 본 저장소를 클론할 필요가 없습니다. 

1. `https://apiscope.klaytn.com/api/transaction/{txHash}`로 GET 리퀘스트를 보낸 뒤 `["result"]["input"]`의 hex 데이터를 ASCII로 변환하면 됩니다. 아래와 같이 `caver-js`의 `hexToAscii`를 이용하거나, [다른 방법](https://stackoverflow.com/questions/3745666/how-to-convert-from-hex-to-ascii-in-javascript)을 이용할 수 있습니다.

```js
var Caver = require('caver-js');
var caver = new Caver();
console.log(caver.utils.hexToAscii(hex));
```

2. `ASDF`가 데이터라고 하면, 결과는 대충 아래 같을 거예요.
```
ÄjÒ asdf
```
앞에 있는 4개 문자(`ÄjÒ `)를 제거해주고 이용하면 끝~! 물론, hex 데이터를 ASCII로 바꾸는 과정에서 없애도 좋겠지요!

## 펌웨어 업데이트 관련

### saveKey

### saveHash

### verifyHash
