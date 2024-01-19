from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives.asymmetric import rsa


class Wallet: 
    def __init__(self, name):
        self.name = name
        self.private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048, backend=default_backend())
        self.public_key = self.private_key.public_key()

    def create_signature(self, message):
        message_str = str(message)
        sig = self.private_key.sign(message_str.encode('utf-8'), padding.PSS(mgf=padding.MGF1(hashes.SHA256()), salt_length=padding.PSS.MAX_LENGTH), hashes.SHA256())
        return sig
    
    def create_unsigned_message(self):
        amount = input('Enter the amont you wish to send: ')
        reciever = input('Enter the address of the recipient:')

        transaction = {'sender': self.name}


def verify_signature(signature, message, public_key):
    # Verify the signature using the public key
    message_str = str(message)
    try: 
        public_key.verify(signature, message_str.encode('utf-8'), padding.PSS(mgf=padding.MGF1(hashes.SHA256()), salt_length=padding.PSS.MAX_LENGTH), hashes.SHA256())
        return True
    except:
        return False
    



    













    


