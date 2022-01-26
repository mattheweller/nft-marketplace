const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  let txHash, txReceipt
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();

  txHash = nftMarket.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let nftMarketAddress = txReceipt.contractAddress

  console.log("nftMarket deployed to:", nftMarketAddress);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarketAddress);
  await nft.deployed();

  txHash = nft.deployTransaction.hash;
  console.log(`NFT hash: ${txHash}\nWaiting for transaction to be mined... \n`);
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let nftAddress = txReceipt.contractAddress

  console.log("nft deployed to:", nftAddress);  
//   const timeoutMsg = () => { console.log("Wating for verification...") }

//   try {
//     setTimeout(timeoutMsg, 5000);
//     await hre.run("verify:verify", { address: nftMarketAddress });
//     console.log("NFT Marketplace verified!");
//   } catch (err) {
//     console.log(err);
//   }
  
//   try {
//     setTimeout(timeoutMsg, 5000);
//     await hre.run("verify:verify", { 
//       address: nftAddress,
//       constructorArguments: [nftMarketAddress]
//     });
//     console.log("NFT contract verified!");
//   } catch (err) {
//     console.log(err);
//   }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
