const axios = require('axios');
const niceList = require('../utils/niceList');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

// Checks if a given name is on the nice list using a Merkle Tree proof and requests a gift from the server.
async function main() {
  
  const name = 'Norman Block'; 
  const tree = new MerkleTree(niceList);

  const index = niceList.findIndex(n => n === name);
  const proof = tree.getProof(index);

  const { data: result } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof,
  });

  console.log({ result });
}

main();
