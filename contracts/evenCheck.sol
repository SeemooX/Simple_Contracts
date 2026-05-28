// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EvenCheck {
    function iseEven(uint256 number) public pure returns (bool) {
        return number % 2 == 0;
    }
}

/* 0xF58bc37dC55E67c224c424560247841FCc48a4B4: contract address in sepolia-ether */
/* 0x802c42cad9234fd8e3a659b0c8d8b458c1bdb1e1602026eb33eaab93a6e5e9f9:  transcation hash in sepolia-ether */