pragma solidity ^0.4.23;

contract Biss {

    struct Firmware {
        string key;
        string hash;
    }

    // 데이터 전송에 사용
    string[] dataStorage;

    function saveData(string _data) public { // data를 저장
        dataStorage.push(_data);
    }

    // 펌웨어 업데이트 관련
    mapping (uint => Firmware) firmwares; // fileid => Firmware

    function saveKey(uint _fileID, string _key) public { // fileID의 펌웨어에 key를 저장
        firmwares[_fileID].key = _key;
    }

    function saveHash(uint _fileID, string _hash) public { // fileID의 펌웨어에 hash(펌웨어 해시)를 저장
        firmwares[_fileID].hash = _hash;
    }

    function verifyHash(uint _fileID, string _hash) public view returns (bool) { // 해당 fileID의 해시가 _hash인지 확인
        return (keccak256(abi.encodePacked(firmwares[_fileID].hash)) == keccak256(abi.encodePacked(_hash)));
    }

}
