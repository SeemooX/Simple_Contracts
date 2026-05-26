// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EtherWeiConvert {

    function etherToWei(uint256 ethAmount) public pure returns (uint256){
        return ethAmount * 1 ether; // 1 ether == 1e18 == 10 ** 18 == 1e18, in numbers term not unit term. 1 ether = 1e18 wei, adding the wei for unit
    }

    // Not good for serving values, since it truncates
    function weiToEther(uint256 weiAmount) public pure returns (uint256) {
        return weiAmount / 1e18 wei; // This actually going to neglect the decimals, so if output is 0.5, it will show only 0
    }
}

/* 0xc20cc0F842f100C038773edC07B51D9b94740D43: contract address in sepolia-ether */
/* 0x5081d06113459e13aecdd45b2d102bf993682d852a3047561b4225f8e43f45ef:  transcation hash in sepolia-ether */