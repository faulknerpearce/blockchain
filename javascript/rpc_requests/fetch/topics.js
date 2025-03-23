const { keccak256 } = require("ethereum-cryptography/keccak"); 
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils"); 

// Generate the first topic by hashing the event signature
function firstTopic() {

    // Define the event signature
    const eventSignature = "Transfer(address,address,uint256)";

    // Convert signature to bytes

    const bytes = utf8ToBytes(eventSignature);

    // Hash the bytes using keccak256
    const digest = keccak256(bytes);

    // Return hashed signature with '0x' prefix
    return '0x' + toHex(digest);
}

// Format an Ethereum address for use as a topic in event logs
function secondTopic() {

    // Example Ethereum address
    const address = "0x28c6c06298d514db089934071355e5743bf21d60";

    // Remove '0x' prefix from address
    const strippedAddress = address.slice(2);

    // Pad address to 64 characters with leading zeros
    const paddedAddress = strippedAddress.padStart(64, '0');

    // Return padded address with '0x' prefix
    return '0x' + paddedAddress;
}

module.exports = { firstTopic, secondTopic } // Export functions for use in other modules