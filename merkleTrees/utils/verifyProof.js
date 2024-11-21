const { keccak256 } = require('ethereum-cryptography/keccak');
const { hexToBytes, bytesToHex } = require('ethereum-cryptography/utils');

// Combines two hash values into one
const concat = (left, right) => keccak256(Buffer.concat([left, right]));

// Verifies a Merkle proof for a given leaf and root
function verifyProof(proof, leaf, root) {
  
  proof = proof.map(({ data, left }) => ({ 
    left, data: hexToBytes(data)
  }));

  // Hash the leaf to get its initial hash value
  let data = keccak256(Buffer.from(leaf));

  // Iteratively combine the hash with each proof node
  for (let i = 0; i < proof.length; i++) {
    if (proof[i].left) {
      data = concat(proof[i].data, data); // Combine with left sibling
    } else {
      data = concat(data, proof[i].data); // Combine with right sibling
    }
  }

  // Return true if the final computed hash matches the root
  return bytesToHex(data) === root;
}

module.exports = verifyProof;
