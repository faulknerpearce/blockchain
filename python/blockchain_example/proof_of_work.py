from hashlib import sha256

# This function will find a hash that has the required amount of leading zeros.
def proof_of_work(transactions, difficulty):
    nonce = 0
    proof = sha256((str(nonce) + str(transactions)).encode()).hexdigest()
    while proof[:difficulty] != "0" * difficulty:
        nonce += 1
        proof = sha256((str(nonce)+str(transactions)).encode()).hexdigest()
    return proof

# ________Main Program_________ #
new_transactions = [{'amount': '30', 'sender': 'alice', 'receiver': 'bob'}, {
    'amount': '55', 'sender': 'bob', 'receiver': 'alice'}]

final_proof = proof_of_work(new_transactions, 3)

print(f"final proof: {final_proof}\n")