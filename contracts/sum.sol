// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Sum {
    uint256 public var1;
    uint256 public var2;

    function addition1() public view returns (uint256) {
        return var1 + var2;
    }

    function addition2(uint256 x, uint256 y) public pure returns (uint256) {
        return x + y;
    }

    function setVar1(uint256 _var1) public {
        var1 = _var1;
    }

    function setVar2(uint256 _var2) public {
        var2 = _var2;
    }
}

/* 0x113658A92D3d76e6050E4E3596d0b7670b57a831: contract address in sepolia-ether */
/* 0x153293d6f713b0e83f7e215cc5278d109a4f3dcf5c04f993afd9dc13c51c7169:  transcation hash in sepolia-ether */