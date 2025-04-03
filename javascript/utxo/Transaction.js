class Transaction {
    constructor(inputUTXOs, outputUTXOs){
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute(){

        let inputTotal = 0;
        let outputTotal = 0;
       
        for(const UXTO of this.inputUTXOs){
            if(UXTO.spent == true){
                throw new Error('Error type: Spent UTXO.');
            } 
        }

        for(const input of this.inputUTXOs){
            inputTotal += input.amount;
        }

        for(const output of this.outputUTXOs){
            outputTotal += output.amount;
        }

        if(inputTotal < outputTotal){
            throw new Error('Error type: Insufficient Funds.');
        }
        
        this.inputUTXOs.forEach(UTXO => UTXO.spent = true);
    }
}

module.exports = Transaction;