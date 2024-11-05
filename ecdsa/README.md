# ECDSA Wallet and Transaction Verification

This project implements a simple ECDSA (Elliptic Curve Digital Signature Algorithm) wallet system that allows users to create and verify transactions in a blockchain-like setup. 
It includes both a client and server component. 
The client allows users to input their private key to view their balance, create transactions, and sign them. 
The server verifies the signature and processes the transaction if valid.

## Project Structure

### Client
The client is built with React and consists of the following main files:

- **App.jsx**: The main component that renders the wallet and transfer components, manages the user's balance, address, and private key.
- **Wallet.jsx**: Allows the user to input their private key, which derives the public key and fetches the balance from the server.
- **Transfer.jsx**: Allows the user to create a transaction by specifying the recipient's address and the amount to send. The transaction is signed with the private key and sent to the server for verification.
- **TransactionContext.jsx**: Contains utility functions for creating transactions, hashing messages, and signing messages.

#### Key Client-Side Functionalities
- **Wallet Component**: Manages the user's private and public keys and displays the balance. The public key is derived from the private key and used to fetch the balance from the server.
- **Transfer Component**: Allows users to create and sign transactions, which are then sent to the server for verification.
- **Transaction Utilities**: Provides helper functions for transaction creation, message hashing (using `keccak256`), and message signing.

### Server
The server is built with Node.js and Express and includes the following files:

- **generate.js**: Generates three wallets with initial balances and logs their private keys and public keys.
- **verify.js**: Contains functions for hashing messages and verifying signatures to ensure that a transaction's sender is valid.
- **index.js**: The main server file that handles API endpoints for fetching balance and sending transactions.

#### Key Server-Side Functionalities
- **Address Generation**: `generate.js` creates public/private key pairs for three wallets, each with an initial balance of 100.
- **Signature Verification**: `verify.js` hashes and verifies message signatures using the sender's public key.
- **API Endpoints**:
  - `GET /balance/:address`: Fetches the balance for the specified address.
  - `POST /send`: Verifies the signature of a transaction and processes it if the signature is valid.

## Installation and Setup

### Prerequisites
- **Node.js**: Ensure you have Node.js installed (v14+ recommended).
- **NPM**: Node Package Manager comes with Node.js and is used for dependency management.

### Step-by-Step Guide
- Open two terminal windows: one in the client folder and the other in the server folder.

### Client
The client folder contains a React app using Vite. To get started, follow these steps:

1. Open up a terminal in the `/client` folder.
2. Run `npm install` to install all dependencies.
3. Run `npm run dev` to start the application.
4. Now you should be able to visit the app at [http://127.0.0.1:5173/](http://127.0.0.1:5173/).

#### Server
The server folder contains a Node.js server using Express. To run the server, follow these steps:

1. Open a terminal within the `/server` folder.
2. Run `npm install` to install all dependencies.
3. Run `node index` to start the server.

The server generates three wallet addresses with initial balances when it starts. These addresses, along with their private keys, are logged in the server console.
The application should connect to the default server port (3042) automatically!
