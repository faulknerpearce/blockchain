# Import functions for key generation, signature creation, and signature verification
from keygen import generate_key_pair, create_signature, verify_signature

# Function to verify if the sender has sufficient funds
def verify_funds(sender, amount, current_ledger):
    if current_ledger[sender]['Balance'] < amount:
        return False
    else:
        return True

# Function to create a new transaction
def create_transaction(current_ledger):
    transaction = None
    sender = input('Enter your name or address: ')
    
    # Check if the sender exists in the ledger
    if sender in current_ledger:
        amount = int(input('Enter the amount you wish to send: '))
        
        # Verify if the sender has sufficient funds
        if verify_funds(sender, amount, current_ledger):
            receiver = input('Enter the recipient\'s name or address: ')
            transaction = {'Amount': amount, 'Sender': sender, 'Receiver': receiver}
        else:
            print('Insufficient funds.')
    else: 
        print('No account with that name was located.')
    
    return transaction

# Function to sign a transaction with a private key
def sign_transaction(transaction, private_key):
    print('Do you wish to sign this transaction:\n')
    print(f'{transaction}\n')
    choice = input('Press 1 for Yes. Press 2 for No: ')

    if choice == '1':
        # Create a signature for the transaction
        signature = create_signature(transaction, private_key)
        return signature
    else:
        print('The transaction was not signed.')

# Function to update the ledger with a new transaction # Operation for a node class.
def update_ledger(signature, transaction, public_key, current_ledger):
    # Verify the signature before updating the ledger
    if verify_signature(signature, transaction, public_key):
        
        print('The signature verification was successful.\n')

        current_ledger[transaction['Sender']] -= transaction['Amount']

        if transaction['Receiver'] in current_ledger:

            current_ledger['Receiver'] += transaction['Amount']
            
        else:
            current_ledger.update({transaction['Receiver']:{'Balance': transaction['Amount']} })
            
    else:
        print('The signature verification was not successful.\n')

#________Main Program_________ # 
if __name__ == "__main__":

    # Initial ledger with account balances
    ledger = {'Alice': {'Balance': 100}, 'Bob': {'Balance': 20}}

    # Generate private and public keys for the user
    my_private_key, my_public_key = generate_key_pair()

    # Create a new transaction and get user input
    new_transaction = create_transaction(ledger)

    # Sign the transaction with the user's private key
    transaction_signature = sign_transaction(new_transaction, my_private_key)

    # Update the ledger with the new transaction and signature verification
    update_ledger(transaction_signature, new_transaction, my_public_key, ledger)
    
    print(ledger)