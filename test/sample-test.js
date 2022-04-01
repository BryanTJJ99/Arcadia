const { expect } = require("chai");
const { ethers } = require("hardhat");

describe ("MyNFT", function() {
    it("should mint and transfer nft to someone"), async function() {
        const Arcadia = await ethers.getContractFactory("Arcadia");
        const arcadia = await Arcadia.deploy();
        await arcadia.deployed();
        const recipient = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

        const metadataURI = 'src/artifacts/arcadia.png';

        let balance = await arcadia.balanceOf(recipient);
        expect(balance).to.equal(0);
        const newlyMintedToken = await arcadia.payToMint(recipient, metadataURI, 
            { value: ethers.utils.parseEther('0.0005')});
        await newlyMintedToken.wait();
        balance = await arcadia.balanceOf(recipient);
        expect(balance).to.equal(1);

        expect(await arcadia.isContentOwned(metadataURI)).to.equal(true);
    }
} )