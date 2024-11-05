const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

// Hashes a message using keccak256 and returns the hash.
function hashMessage(message){
    const bytes = utf8ToBytes(message);
    const hash = keccak256(bytes);
        
    return hash;
}

// Takes the signatre as a Uint8Array and a message as a stringified json. Verifies a signature against a message and a recovered public key.
function verify_signature(sig, message) {

    const messageHash = hashMessage(message);

    const signature = new secp.secp256k1.Signature(BigInt(sig.r), BigInt(sig.s), Number(sig.recovery))

    const message_sender = JSON.parse(message).Sender;

    return secp.secp256k1.verify(signature, messageHash, message_sender);    
}

module.exports = verify_signature;
