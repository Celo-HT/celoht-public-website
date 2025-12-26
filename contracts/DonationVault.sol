// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DonationVault {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {}

    function withdraw() external {
        require(msg.sender == owner);
        payable(owner).transfer(address(this).balance);
    }
}