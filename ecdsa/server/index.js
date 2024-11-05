const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

const generate_addresses = require('./scripts/generate');
const verify_signature = require('./scripts/verify')

app.use(cors());
app.use(express.json());

// This will generate three wallets all with a balance of 100.
const balances = generate_addresses();

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { transaction, signature } = req.body;

  if(verify_signature(signature, JSON.stringify(transaction))){
    balances[transaction.Sender] -= transaction.Amount;
    balances[transaction.Receiver] += transaction.Amount;

    return res.status(400).send({message: "Valid Signature. Transaction successful!"})

  } else {
    return res.status(400).send({ message: "Invalid signature. Transaction failed." });
  }
});

app.listen(port, () => {
  console.log(`\nListening on port ${port}!\n`);
});
