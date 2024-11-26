const { ethers } = require('ethers');
const get_wallet_instance  = require('./get_wallet_instance')
require('dotenv').config();

// Sends AVAX to the specified address with a given value.
async function send_avax(wallet, value, to) {
    
    const transactionPromise = await wallet.sendTransaction({ 
        value: Utils.parseEther(value),
        to: to,
        gasLimit: 0x5208,
        gasPrice: 0x3b9aca00 
    });

    return transactionPromise; 
}

// Main function to initialize the wallet and send AVAX.
async function main() {
    const my_wallet = get_wallet_instance(process.env.PRIVATE_KEY); // Gets wallet instance from private key

    const value = 0; // Amount to send
    const to = ''; // Recipient address

    tx = await send_avax(my_wallet, value, to); // Calls send_avax with the wallet, value, and recipient address

    console.log(`Transaction Sent.\nTransaction Hash: ${tx.hash}`); // Logs transaction details
}

main();