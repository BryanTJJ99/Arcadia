const { expect } = require("chai");
const hre = require("hardhat");
 
describe ("MyNFT", function() {
    it("should mint and transfer nft to someone"), async function() {
        const Arcadia = await hre.ethers.getContractFactory('Arcadia');
        const arcadia = await Arcadia.deploy();
        await arcadia.deployed();
        const recipient = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';

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