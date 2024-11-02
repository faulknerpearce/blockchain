const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// Represents a cryptographic address with public and private keys as Uint8Arrays, allowing message hashing and signing.
class Address {
    constructor(privatekey) {
        this.privateKey = privatekey; // Uint8Array
        this.publicKey = secp.secp256k1.getPublicKey(this.privateKey); // Uint8Array
    }

    // Hash a message using keccak256.
    hashMessage(message) {
        const bytes = utf8ToBytes(message);
        const messageHash = keccak256(bytes);
        
        return messageHash;
    }

    // Sign a message using the private key.
    signMessage(messageHash) { 
        const signature = secp.secp256k1.sign(messageHash, this.privateKey);
        
        return signature;
    }
}

module.exports = Address;