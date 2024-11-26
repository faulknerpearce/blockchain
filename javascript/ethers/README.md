# Wallet Management with Ethers.js

This project demonstrates how to interact with the Avalanche blockchain using the `ethers.js` library. It includes scripts to view wallet details, send AVAX, and initialize a wallet instance.

## Features
- View wallet address, balance, and transaction count.
- Send AVAX to a specified address.
- Easily initialize a wallet instance using a private key and JSON-RPC provider.

## Prerequisites

1. Node.js installed on your system.

2. An Avalanche-compatible private key.

3. An Alchemy RPC URL for the Avalanche network.

4. A `.env` file with the following variables:
   - PRIVATE_KEY=your_private_key_here
   - ALCHEMY_RPC_URL=your_rpc_url_here

5. npm install ethers dotenv


### Scripts

1. viewWallet.js
This script displays the wallet address, balance, and transaction count.

2. sendAVAX.js
This script sends AVAX to a specified address.

Configuration:
Update the following variables in the main() function:
- value: Amount of AVAX to send.
- to: Recipient address.

3. get_wallet_instance.js
This module initializes and returns a wallet instance using the provided private key and JSON-RPC provider.

Ensure your .env file is correctly configured with a valid private key and Alchemy RPC URL.
Double-check recipient addresses and amounts when sending AVAX to avoid losing funds.