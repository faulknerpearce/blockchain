const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, hexToBytes } = require("ethereum-cryptography/utils");

const verify_signature = require('./verify')
const Address = require('./address')

function main(){

    const wallet_one = new Address(hexToBytes('01016f42e15313eefd29cf986a8a44728721016dbaaaf63bd798d94fe41515ef'))

    const wallet_two = new Address(hexToBytes('f780e799a05a2c4cabbc6595e7148982e7070813a9b73dc01337fa94270335f6'))

    const message = JSON.stringify({'Sender': toHex(wallet_one.publicKey), 'Reciever': toHex(wallet_two.publicKey), 'Amount': 50})

    const hash = wallet_one.hashMessage(message)

    const signature = wallet_one.signMessage(hash)

    console.log(verify_signature(signature, message))
}

main();