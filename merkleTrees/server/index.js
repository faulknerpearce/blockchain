const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

const MERKLE_ROOT = 'ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa';

// Handles POST requests to verify if a name is on the list using a Merkle proof.
app.post('/gift', (req, res) => {
  const { name, proof } = req.body;

  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  if (isInTheList) {
    res.send("Valid Proof. You Are on the list!");
  } else {
    res.send("Invalid Proof. You are not on the list.");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});