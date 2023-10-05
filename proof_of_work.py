# import sha256
from hashlib import sha256

new_transactions = [{'amount': '30', 'sender':'alice', 'receiver':'bob'},{'amount': '55', 'sender':'bob', 'receiver':'alice'}]

# finding a proof that has 2 leading zeros
def find_hash(transactions, difficulty):
    nonce = 0
    proof = sha256((str(nonce)+str(transactions)).encode()).hexdigest()
    while proof[:difficulty] != "0" * difficulty: 
        nonce += 1
        proof = sha256((str(nonce)+str(transactions)).encode()).hexdigest()
    return proof 

final_proof = find_hash(new_transactions, 3)

#printing final proof that was found
print(f"final proof: {final_proof}")