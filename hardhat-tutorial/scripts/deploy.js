const { ethers } = require("hardhat");

async function main() {
    /*
    ethers.js 中的 ContractFactory 是用于部署新智能合约的抽象，
    所以 whitelistContract 这里是我们白名单合约实例的工厂。
    */
    const whitelistContract = await ethers.getContractFactory("Whitelist");

    // here we deploy the contract
    const deployedWhitelistContract = await whitelistContract.deploy(10);
    // 10 is the Maximum number of whitelisted addresses allowed

    // Wait for it to finish deploying
    await deployedWhitelistContract.deployed();

    // print the address of the deployed contract
    console.log(
        "Whitelist Contract Address:",
        deployedWhitelistContract.address
    );
}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });