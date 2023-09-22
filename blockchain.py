#imports the Block class from block.py
from block import Block

class Blockchain:
    def __init__(self):
      self.chain = []
      self.all_transactions = []
      self.genesis_block()
    
    def genesis_block(self):
      transactions = {}
      genesis_block = Block(transactions, "0")
      self.chain.append(genesis_block)
      return self.chain
    
      # add block to blockchain `chain`
    def add_block(self, transactions):
        previous_block_hash = self.chain[len(self.chain)-1].hash
        new_block = Block(transactions, previous_block_hash)
        self.chain.append(new_block)