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

/* 0xc20cc0F842f100C038773edC07B51D9b94740D43: contract address in sepolia-ether */
/* 0x5081d06113459e13aecdd45b2d102bf993682d852a3047561b4225f8e43f45ef:  transcation hash in sepolia-ether */