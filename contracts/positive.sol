// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Positive {
    function estPositif(int256 x) public pure returns (bool) {
        return x > 0;
    }
}

/* 0x631B3DAc82D88b284F63E8a741645bE3D9102622: contract address in sepolia-ether */
/* 0xba1bca754aab6d9ad118f77fb7e851bccb8a106938455c407443d29cc8832d34:  transcation hash in sepolia-ether */