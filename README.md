## Full stack NFT marketplace built with Polygon, Solidity, IPFS, & Next.js

Mint NFTs on the Mumbai testnet and list them for sale. You can even sell them to your friends. Make sure to connect your wallet on the Mumbai testnet

This is my project to go along with Nader Dabit's blog post [Building a Full Stack NFT Marketplace on Ethereum with Polygon](https://dev.to/dabit3/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb)

### Running this project

#### Local setup

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

# install using Yarn
```
yarn
```

1. Open another terminal tab in the project directory and start the local Hardhat node

```sh
npx hardhat node
```

2. With the local node running, deploy the contracts

```sh
npx hardhat run scripts/deploy.js --network localhost
```

This will produce an output similar to this

```
nftMarket deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3 // Your contract address will be different!
nft deployed to: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 // Your contract address will be different!
```

### Configure __hardhat.config.js__

1. Double check that the following 4 files are all in the `.gitignore`
2. Create these 4 files:
   1. `.env` - Paste `NEXT_PUBLIC_WORKSPACE_URL="https://rpc-mumbai.maticvigil.com"` 
   2. `.secret` - Paste a wallet account private key
   3. `.infuraId` - Paste your infura API key
   4. `.polygonScanApiKey` - Paste yor PolygonScan API key
3. Google how to do these things if you're not sure how
  
### Configure __config.js__

1. Using the `config.example.js` and the contract addresses above, create a `config.js` file and input values with your contact addresses:

```javascript

  export const nftmarketaddress = "0x02f696d4Cf0B61376FF1c9fe6b669b4F7bD8055C" // Your contract address will be different!
  export const nftaddress = "0xC4B9D5414D3931027C7529A7E598072ab1F20F48" // Your contract address will be different!
  
```
### Running the UI

1. Start the UI and view it at `localhost:3000` with the following command

```
yarn dev
```

### Deploying contracts to Mumbai


```
npx hardhat run scripts/deploy.js --network mumbai
npx hardhat verify --network mumbai 0x02f696d4Cf0B61376FF1c9fe6b669b4F7bD8055C
npx hardhat verify --network mumbai 0xC4B9D5414D3931027C7529A7E598072ab1F20F48 "0x02f696d4Cf0B61376FF1c9fe6b669b4F7bD8055C"
```

Check out your NFTs on https://testnets.opensea.io/account!