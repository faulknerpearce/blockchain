#imports the Block class from block.py
from block import Block

class Blockchain:
    def __init__(self):
      self.chain = []
      self.all_transactions = []
      self.genesis_block()
    
    # creates an genisis block. 
    def genesis_block(self):
      transactions = {}
      genesis_block = Block(transactions, "0")
      genesis_block.generate_hash()
      self.chain.append(genesis_block)
    
    # add block to blockchain `chain`
    def add_block(self):
        transactions = {}
        previous_block_hash = self.chain[len(self.chain)-1].hash
        new_block = Block(transactions, previous_block_hash)
        new_block.generate_hash()
        proof = self.proof_of_work(new_block, 2)
        self.chain.append(new_block)
        return proof, new_block

    def print_blocks(self):
       for i in range(len(self.chain)):
          current_block = self.chain[i]
          print(f"Block {i} {current_block}")
          current_block.print_contents()

    def validate_chain(self):
       for i in range(1, len(self.chain)):
          current = self.chain[i]
          previous = self.chain[i-1]

          if(current.hash != current.generate_hash()):
             print("The current hash of the block does not equal the generated hash of the block.")
             return False
          
          if(previous.hash != previous.generate_hash()):
             print("The previous block's hash does not equal the previous hash value stored in the current block.")
             return False  
       return True
    
    def proof_of_work(self, block, difficulty):
       nonce = 0
       proof = block.generate_hash(nonce)
       while proof[:difficulty] != "0" * difficulty:
          nonce += 1
          proof = self.block.generate_hash(nonce)
       return proof