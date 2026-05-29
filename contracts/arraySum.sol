// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ArraySum {
    uint256[] public numbers;

    constructor() {
        numbers = [5, 4, 6];
    }

    function ajouterNombre(uint256 number) public {
        numbers.push(number);
    }

    function getElement(uint256 index) public view returns (uint256) {
        require(numbers.length > index, "Not Enough Space");
        return numbers[index];
    }

    function afficherTableau() public view returns (uint256[] memory) {
        return numbers;
    }

    function calculerSomme() public view returns(uint256) {
        uint256 sum = 0;
        for(uint256 i; i < numbers.length; i++) {
            sum = sum + numbers[i];
        }

        return sum;
    }
}

/* 0x96F91D0fE4C23587Cb0aa1F1baB75DB1a36daCfF: contract address in sepolia-ether */
/* 0xbfa60258bf43d7b3ab5f829c98ece3268e249fb6e38c57057d1a3053da28bb31:  transcation hash in sepolia-ether */