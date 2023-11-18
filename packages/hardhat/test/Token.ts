import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";

describe("Token contract", function () {

  async function deployTokenFixture() {
    const Token = await ethers.getContractFactory("Token");
    const [owner, addr1, addr2] = await ethers.getSigners();

    const token = await Token.deploy();


    return {
      token,
      owner,
      addr1,
      addr2
    };
  }

  describe("Deployment", function () {

    it("Should set the right owner", async function () {
      const { token, owner } = await loadFixture(deployTokenFixture);

      expect(await token.owner()).to.equal(owner.address); 
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const { token, owner } = await loadFixture(deployTokenFixture);
      
      const ownerBalance = await token.balanceOf(owner.address);
      expect(await token.totalSupply()).to.equal(ownerBalance);
    });

  });

  describe("Transactions", function () {

    it("Should transfer tokens between accounts", async function() {
      const { token, owner, addr1, addr2 } : any = await loadFixture(deployTokenFixture);

      await expect(token.transfer(addr1.address, 50))
        .to.changeTokenBalances(token, [owner, addr1], [-50, 50]);

      await expect(token.connect(addr1).transfer(addr2.address, 50)) 
        .to.changeTokenBalances(token, [addr1, addr2], [-50, 50]);
    });

    it("should emit Transfer events", async function() {
      const { token, owner, addr1, addr2 } : any = await loadFixture(deployTokenFixture);

      await expect(token.transfer(addr1.address, 50))
        .to.emit(token, "Transfer")
        .withArgs(owner.address, addr1.address, 50);

      await expect(token.connect(addr1).transfer(addr2.address, 50))
        .to.emit(token, "Transfer")
        .withArgs(addr1.address, addr2.address, 50);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const { token, owner, addr1 } : any = await loadFixture(deployTokenFixture);
      const initialOwnerBalance = await token.balanceOf(owner.address);

      await expect(
        token.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith("Not enough tokens");  

      expect(await token.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    });

  });

});