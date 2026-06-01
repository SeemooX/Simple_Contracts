// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Payment {
    address private immutable recipient;

    constructor(address _recipient) {
        recipient = _recipient;
    }

    function receivePayment() public payable {
        require(msg.value > 0, "You didn't send enough ETH to this contract");
    }

    function withdraw() public {
        require(msg.sender == recipient, "You are not eligible to ");
        (bool success, ) = payable(recipient).call{value: address(this).balance}("");
        require(success, "Transfer failed");
    }
}

/* 0x47E2A7A33B612f6Ed6CD10b2981a54F5279BE58D: contract address in sepolia-ether */
/* 0x62ca9be1d4d7bace5cab2e7c55b390ce437cc677376abd26c996988f6df2c909:  transcation hash in sepolia-ether */