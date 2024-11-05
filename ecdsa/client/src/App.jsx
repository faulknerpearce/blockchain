import Wallet from "./Wallet";
import Transfer from "./Transfer";
import { useState } from "react";
import "./App.scss";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState(""); 

  return (
    <div className="app">
      <Wallet
        address={address}
        setAddress={setAddress}
        balance={balance}
        setBalance={setBalance}
        privateKey={privateKey} 
        setPrivateKey={setPrivateKey} 
      />
      <Transfer 
        address={address}
        balance={balance}
        setBalance={setBalance} 
        privateKey={privateKey} 
      />
    </div>
  );
}

export default App