const { keccak256 } = require('ethereum-cryptography/keccak');
const { bytesToHex } = require('ethereum-cryptography/utils');

// Class to construct a Merkle Tree and generate proofs.
class MerkleTree {
  
  // Constructor initializes the tree with hashed leaves and a concatenation function.
  constructor(leaves) {
      this.leaves = leaves.map(Buffer.from).map(keccak256);
      this.concat = (left, right) => keccak256(Buffer.concat([left, right]));

  }
  // Computes and returns the Merkle root as a hex string.
  getRoot(){

      let current_layer = this.leaves;

      while(current_layer.length > 1){
          const next_layer = [];

          for(let i = 0; i < current_layer.length; i += 2){

              const left = current_layer[i];
              const right = current_layer[i+1];

              if(right){
                  next_layer.push(this.concat(left, right));
              }
              else{
                  next_layer.push(left);
         
              }
              
          }
          current_layer = next_layer;
      }
      return bytesToHex(current_layer[0]);
  }
  // Generates a proof for a leaf at the given index.
  getProof(index, layer = this.leaves, proof = []) {
      if (layer.length === 1) return proof;
      
      const newLayer = [];
      
      for (let i = 0; i < layer.length; i += 2) {
          let left = layer[i];
          let right = layer[i + 1];
          if (!right) {
              newLayer.push(left);
          }
          else {
              newLayer.push(this.concat(left, right));

              if (i === index || i === index - 1) {
                  let isLeft = !(index % 2);
                  proof.push({
                      data: bytesToHex(isLeft ? right : left),
                      left: !isLeft
                  });
              }
          }
      }
      return this.getProof(Math.floor(index / 2), newLayer, proof);
  }
}

module.exports = MerkleTree;