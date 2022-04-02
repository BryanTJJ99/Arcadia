const {hre} = require("hardhat");

async function main() {
    const Arcadia = await hre.ethers.getContractFactory("Arcadia");
    const arcadia = await Arcadia.deploy("Hello, hardhat");
    await arcadia.deployed();
    console.log("greeter deployed to:", arcadia.address);
} 

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1)
    })