// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StringManagement {
    string private message;

    function setMessage(string memory _message) public {
        message = _message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function concatinate(string memory a, string memory b) public pure returns (string memory) {
        return string.concat(a, b);
    }

    function concatinateWith(string memory a) public view returns (string memory) {
        return string.concat(message, a);
    }

    function stringLength(string memory s) public pure returns (uint) {
        return bytes(s).length;
    }

    function compare(string memory a, string memory b) public pure returns (bool) {
        return keccak256(bytes(a)) == keccak256(bytes(b));
    }
}

/* 0xDA614D68ffE73b8a767059864527d265fC570120: contract address in sepolia-ether */
/* 0xc17dec8d63b06a09c22dfd7769a2b52d6cd047e5f7fa69b78a83fa9335002467:  transcation hash in sepolia-ether */