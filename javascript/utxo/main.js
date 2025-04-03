const TXO = require('./TXO');
const Transaction = require('./Transaction');

function main(){

    const fromAddress = "1DBS97W3jWw6FnAqdduK1NW6kFo3Aid1N6";
    const toAddress = "12ruWjb4naCME5QhjrQSJuS5disgME22fe";

    const txo1 = new TXO(fromAddress, 4);
    const txo2 = new TXO(fromAddress, 5)

    const outputTXO1 = new TXO(toAddress, 10);
    const tx = new Transaction([txo1, txo2], [outputTXO1]);

    tx.execute()

}

main();
