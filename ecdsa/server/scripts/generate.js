const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

// Generates three public keys with initial balances and stores them in a hashmap, then logs corresponding private keys.
function generate_addresses(){

    const balances = {}

    for(let i = 0; i < 3; i ++){

        private_key = secp.secp256k1.utils.randomPrivateKey(); //Uint8Array
        public_key = secp.secp256k1.getPublicKey(private_key) //Uint8Array

        const public_key_hex = toHex(public_key);
        balances[public_key_hex] = 100
       
        console.log(`\nPrivate Key ${i+1}: ${toHex(private_key)}`)
        console.log(`Public key: ${toHex(public_key)}\n`)  
    }

    return balances
}

module.exports = generate_addresses;
