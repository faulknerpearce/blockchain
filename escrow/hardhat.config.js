require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./app/src/artifacts",
  },
  networks: {
    fuji: {
      url: process.env.FUJI_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
