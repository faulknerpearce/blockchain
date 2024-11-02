from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.serialization import load_der_public_key
import base64
from datetime import datetime

class Wallet: 
    
    def __init__(self):
        self.private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048, backend=default_backend())
        self.public_key = self.private_key.public_key()

    def get_public_key(self):
        pk = self.public_key.public_bytes(encoding=serialization.Encoding.DER, format=serialization.PublicFormat.SubjectPublicKeyInfo)
        return base64.b64encode(pk).decode()

    def create_unsigned_message(self):

        timestamp = int(datetime.now().timestamp())
        
        amount = input('Enter the amont you wish to send: ')
        
        reciver = input('Enter the address of the recipient: ')

        transaction = {'sender': self.get_public_key(), 'reciver': reciver, 'amount': amount, 'timestamp': timestamp}
        
        return transaction
    
    def sign_message(self, message):
        message_str = str(message)
        signature = self.private_key.sign(message_str.encode('utf-8'), padding.PSS(mgf=padding.MGF1(hashes.SHA256()), salt_length=padding.PSS.MAX_LENGTH), hashes.SHA256())
        return signature
    
def verify_signature(public_key_encoded, signature, message):
    try:
        public_key_der = base64.b64decode(public_key_encoded)
        public_key = load_der_public_key(public_key_der)
        message_str = str(message)
        
        public_key.verify(signature,message_str.encode('utf-8'), padding.PSS(mgf=padding.MGF1(hashes.SHA256()), salt_length=padding.PSS.MAX_LENGTH),hashes.SHA256())
        return True
    
    except Exception as e:
        print(f"Verification failed: {e}")
        return False
    
def verify_transaction(transaction, signature):
    pk = transaction['sender']
    return verify_signature(pk, signature, transaction)
  
# Will need to include a checksum to verify funds in the wallet once the bassic implementaton is complete.
if __name__ == '__main__':

    wallet_one = Wallet() 

    wallet_two = Wallet()

    test_transaction = wallet_one.create_unsigned_message()

    test_signature = wallet_one.sign_message(test_transaction)

    print(verify_transaction(test_transaction, test_signature))
