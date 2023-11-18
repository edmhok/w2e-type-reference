// import * as dotenv from "dotenv";
// import { HardhatUserConfig, task } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";

// dotenv.config();

// const accounts = {
//   mnemonic:
//   process.env.MNEMONIC ||
//   "test test test test test test test test test test test test",
// };

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();
  
//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// const config: HardhatUserConfig = {
//   solidity: "0.8.9",
//   defaultNetwork: "hardhat",
//   networks: {
//     localhost: {
//       url: "http://127.0.0.1:8545",
//       accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
//     },
//     hardhat: {
//       // forking: {
//       //   enabled: true,
//       //   url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
//       //   blockNumber: 15306000
//       // },
//       // mining: {
//       //   auto: true
//       // }
//     },
//     mainnet: {
//       url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`, 
//       accounts
//     },
//     ropsten: {
//       url: process.env.ROPSTEN_URL || "",
//       accounts:
//         process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
//     },
//     rinkeby: {
//         url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`, 
//         accounts,
//     },
//     kovan: {
//         url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`, 
//         accounts,
//     },
//     polygon: {
//         url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, 
//         accounts
//     },
//     mumbai: {
//         url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, 
//         accounts
//     },
//     sepolia: {
//       url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
//       accounts
//     },
//   },
//   gasReporter: {
//     enabled: process.env.REPORT_GAS !== undefined,
//     currency: "USD",
//   },
//   etherscan: {
//     apiKey: process.env.ETHERSCAN_API_KEY,
//   }
// };

// export default config;

require("@nomicfoundation/hardhat-toolbox");

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "95KtBhWGpSRg0A4SlZBm1keRfGMSws2M";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = "7729532de2521d2fd8f1afcd9787442b26fc71cc5f6d19d589303dd3c798f899";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};