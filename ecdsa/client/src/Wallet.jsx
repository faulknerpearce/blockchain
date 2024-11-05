import server from "./server";
import { getPublicKey } from "./TransactionContext";

function Wallet({ address, setAddress, privateKey, setPrivateKey, balance, setBalance }) {
  async function onChange(evt) {
    const newPrivateKey = evt.target.value;
    setPrivateKey(newPrivateKey);

    const derivedPublicKey = getPublicKey(newPrivateKey);
    setAddress(derivedPublicKey); // Sets address as the derived public key

    if (derivedPublicKey) {
      const {
        data: { balance },
      } = await server.get(`balance/${derivedPublicKey}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Import Wallet</h1>

      <label>
        Private Key
        <input
          placeholder="Enter Your Private Key: "
          value={privateKey}
          onChange={onChange}
        ></input>
      </label>

      <label>
        Public Key
        <input
          placeholder="View your Public Key."
          value={address}
          readOnly
        ></input>
      </label>
      
      
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;