// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract Form {
    uint256 public x;
    uint256 public y;

    constructor(uint256 _x, uint256 _y) {
        x = _x;
        y = _y;
    } 

    function deplacerForm(uint256 dx, uint256 dy) public {
        x += dx;
        y += dy;
    }

    function afficheXY() public view returns (uint256, uint256) {
        return (x, y);
    }

    function afficheInfos() public pure virtual returns (string memory);
    function surface() public view virtual returns (uint256);
}