import React, { useState, useContext } from 'react'
import TransContext from './TransContext'
import '../App.css'

function AddTransaction() {

    let { addTransaction } = useContext(TransContext)

    let [newName, setText] = useState('');
    let [newAmount, setAmount] = useState(0);

    const handleAddition = e => {
        e.preventDefault();
        addTransaction({
            name: newName,
            amount: newAmount,
        })
    }

    return (
        <div>
            <h2>Add transaction</h2>
            <form onSubmit={handleAddition}>
                <div>
                    <label htmlFor="text">#Text</label>
                    <input value={newName} onChange={e => setText(e.target.value)} required className="inputForm" type="text" placeholder="Enter Text.."></input> <br />
                </div>
                <div>
                    <label htmlFor="amount">#Amount</label>
                    <input value={newAmount} onChange={e => setAmount(e.target.value)} className="inputForm" type="number" required placeholder="Enter Amount.."></input> <br /><br />
                </div>
                <button className="formButton">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
