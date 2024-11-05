import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";
import { toHex, hexToBytes, utf8ToBytes} from "ethereum-cryptography/utils"

export function createTransaction(sender, receiver, amount) {
    return {
      Sender: sender,
      Receiver: receiver,
      Amount: parseInt(amount),
    };
}

export function getPublicKey(privateKey) {
  return toHex(secp256k1.getPublicKey(hexToBytes(privateKey)));
}

// Hash a message string using keccak256.
export function hashMessage(message) {
  const bytes = utf8ToBytes(message);
  const hash = keccak256(bytes);
  
  return hash;
}

// Sign a message using the private key.
export function signMessage(messageHash, privateKey) { 
  const signature = secp256k1.sign(messageHash, hexToBytes(privateKey));
  
  return signature;
}