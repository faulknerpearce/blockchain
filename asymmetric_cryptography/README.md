# Blockchain Address and Signature Verification

This repository demonstrates a basic implementation of cryptographic address generation, message signing, and signature verification. Built with JavaScript, these scripts illustrate key blockchain concepts, including public/private key generation, message hashing, and signature verification, using the `ethereum-cryptography` library.

## Contents

1. [address.js](#addressjs)
2. [generate.js](#generatejs)
3. [verify.js](#verifyjs)

### address.js
The `address.js` script defines an `Address` class, which represents a cryptographic address and provides functionality for message hashing and signing.

#### Features:
- **Public/Private Key Management**: Generates a public key based on a provided private key.
- **Message Hashing**: Uses `keccak256` to hash messages, preparing them for signing.
- **Message Signing**: Signs a hashed message with the private key using `secp256k1` cryptography.

#### Class and Methods:
- **Address Class**:
  - `hashMessage(message)`: Hashes the message with `keccak256` and returns the hash.
  - `signMessage(messageHash)`: Signs a message hash with the private key.

### generate.js
This script generates three public keys with associated private keys and assigns each public key an initial balance in a hashmap. It outputs the private keys for reference.

#### Features:
- **Key Generation**: Generates random private keys and corresponding public keys.
- **Balance Assignment**: Initializes each generated public key with a balance in a hashmap.
- **Private Key Logging**: Logs private keys for each address generated.

#### Function:
- `generate_addresses()`: Creates three public/private key pairs, initializes balances, and logs private keys.

### verify.js
The `verify.js` script demonstrates message verification by hashing a message, signing it, and verifying the signature with the sender's public key.

#### Features:
- **Message Hashing**: Hashes a JSON message using `keccak256`.
- **Signature Verification**: Verifies if a message's signature matches the public key in the JSON message.

#### Functions:
- `hashMessage(message)`: Hashes a message string using `keccak256`.
- `verify_signature(signature, message)`: Verifies a given signature by comparing it with a recovered public key from the message.

#### Main Program:
In the `main()` function, two sample addresses are created with predefined private keys. A message representing a transaction is hashed, signed by `wallet_one`, and then verified. This example showcases the full process of creating and verifying a signed message.
