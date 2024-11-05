import { useState } from "react";
import server from "./server";
import { createTransaction, hashMessage, signMessage } from "./TransactionContext";

function Transfer({balance, setBalance, privateKey }) {
  const [publicKey, setPublicKey] = useState("");
  const [recipient, setRecipient] = useState("");
  const [sendAmount, setSendAmount] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    if (!publicKey) {
      alert("Please enter your public key.");
      return;
    }

    if(sendAmount > balance){
      alert('Insuficcient Funds.')
    }

    // Create the transaction using the utility function
    const transaction = createTransaction(publicKey, recipient, sendAmount);

    const messageHash = hashMessage(JSON.stringify(transaction));
 
    const signature = signMessage(messageHash, privateKey);
 
    //Send the transaction, message hash and the signature to server.
    try {
      const response = await server.post(`send`, {
        transaction: transaction,
        
        signature: { 
          r: signature.r.toString(), 
          s: signature.s.toString(),
          recovery: signature.recovery
        }
      });

      alert(response.data.message);
      setBalance(response.data.balance);

    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Create Transaction</h1>

      <label>
        Your Public Key
        <input
          placeholder="Enter Your Public Key: "
          value={publicKey}
          onChange={setValue(setPublicKey)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an Address: "
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <label>
        Send Amount
        <input
          placeholder="Enter an Amount To Send:"
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <input type="submit" className="button" value="Sign Transaction" />
    </form>
  );
}

export default Transfer;
