const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

// Hashes a message using keccak256 and returns the hash.
function hashMessage(message){
    const bytes = utf8ToBytes(message);
    const messageHash = keccak256(bytes);
        
    return messageHash;
}

// Verifies a signature against a message and a recovered public key.
function verify_signature(signature, message) {
 
    const messageHash = hashMessage(message);

    const public_key = JSON.parse(message).Sender;
 
    return secp.secp256k1.verify(signature, messageHash, public_key);    
}

module.exports = verify_signature;