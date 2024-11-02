# Asymmetric Cryptography Python

This folder contains a set of scripts demonstrating essential blockchain concepts and cryptographic operations used in cryptocurrency transactions. 
The examples are built in Python, leveraging cryptographic libraries to generate key pairs, sign transactions, and verify transaction authenticity.

## Contents

---

### keygen.py
This script provides foundational cryptographic functions, including key pair generation, message signing, and signature verification.

#### Functions
- `generate_key_pair()`: Generates an RSA private and public key pair.
- `create_signature(message, private_key)`: Signs a given message using the private key, producing a signature.
- `verify_signature(signature, message, public_key)`: Verifies the authenticity of a message's signature using the public key, ensuring it was signed by the corresponding private key.

---

### signature.py
This script demonstrates a simple transaction system where funds are transferred between accounts and signed transactions are verified before updating a ledger.

#### Features
- Key Generation and Signing: Imports functions from keygen.py to generate key pairs, sign transactions, and verify signatures.
- Transaction Creation: Allows users to create new transactions with sender, receiver, and amount details, checking account balances to verify sufficient funds.
- Ledger Update: Updates the ledger with each verified transaction, deducting from the sender’s balance and adding to the receiver’s balance.

#### Functions
- `verify_funds(sender, amount, current_ledger)`: Checks if the sender has sufficient funds.
- `create_transaction(current_ledger)`: Prompts for transaction details and validates the sender's balance.
- `sign_transaction(transaction, private_key)`: Signs a transaction with a private key if confirmed by the user.
- `update_ledger(signature, transaction, public_key, current_ledger)`: Verifies the transaction signature and updates the ledger if valid.

---

### wallet.py
The wallet.py script simulates a digital wallet. 
This class-based approach allows users to generate a wallet with a unique public/private key pair, create unsigned transactions, sign transactions, and verify transaction authenticity.

#### Features
- Wallet Generation: Creates a wallet with its own public/private key pair.
- Transaction Signing: Signs messages using the wallet’s private key.
- Transaction Verification: Verifies the authenticity of transactions using the public key.

#### Classes and Functions
Wallet Class:

#### Methods
- `get_public_key(self)`: Returns the public key in an encoded format for easy sharing.
- `create_unsigned_message(self)`: Creates an unsigned transaction with timestamp, amount, and recipient details.
- `sign_message(self, message)`: Signs a transaction with the private key.

#### Functions
- `verify_signature(public_key_encoded, signature, message)`: Verifies a signed transaction message using the public key.
- `verify_transaction(transaction, signature)`: Combines transaction and signature verification to ensure integrity.