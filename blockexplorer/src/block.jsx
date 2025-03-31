import React from 'react';

function Block({ blockNumber, blockData }) {
    return (
        <div className="block">
            <h2>Block Number: {blockNumber || 'Loading...'}</h2>
            {blockData && (
                <div>
                    <p><strong>Hash:</strong> {blockData.hash}</p>
                    <p><strong>Timestamp:</strong> {blockData.timestamp}</p>
                    <p><strong>Miner:</strong> {blockData.miner}</p>
                    <p><strong>Transaction Count:</strong> {blockData.transactions.length}</p>
                    <ul>
                        {blockData.transactions.slice(0, 10).map((tx, idx) => (
                            <li key={idx}>{tx}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Block;
