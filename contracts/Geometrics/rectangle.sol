// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Form } from "contracts/geometrics/forme.sol";

contract Rectangle is Form{
    uint256 public lo;
    uint256 public la;

    constructor(uint256 _x, uint256 _y, uint256 _lo, uint256 _la) Form(_x, _y){
        lo = _lo;
        la = _la;
    }

    function surface() public view override returns (uint256) {
        return lo * la;
    }

    function afficheInfos() public pure override returns (string memory) {
        return "I am RECTANGLE";
    }

    function afficheLola() public view returns (uint256, uint256) {
        return (x, y);
    }
}

/* 0x8F265A88b7bBA0890F0A287f3B1b899F73e19f06: contract address in sepolia-ether */
/* 0x1816e5c2616ea4a5b88164112a66ae738a793819964de560ca75297cab1ce51e:  transcation hash in sepolia-ether */