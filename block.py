from datetime import datetime 
from hashlib import sha256

class Block:
    # default constructor for block class
    def __init__(self, transactions, previous_hash ,nonce = 0):
        self.transactions = transactions
        self.previous_hash = previous_hash
        self.nonce = nonce
        self.timestamp = datetime.now().timestamp()
        self.hash = self.generate_hash()

    def print_block(self):
        # Prints block contents.
        print(f"timestamp: {self.timestamp}")
        print(f"transactions: {self.transactions}")
        print(f"current hash: {self.generate_hash}")

    def generate_hash(self):
        # hash the blocks contents
        block_contents = f"{str(self.timestamp)} {str(self.transactions)} {str(self.nonce)}"
        block_hash = sha256(block_contents.encode())
        return block_hash.hexdigest()

