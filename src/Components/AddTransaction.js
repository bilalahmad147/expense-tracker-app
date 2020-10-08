import React, { useState } from 'react'
import '../App.css'

function AddTransaction() {

    let [text, setText] = useState('');
    let [amount, setAmount] = useState(0);

    return (
        <div>
            <h2>Add transaction</h2>
            <form>
                <div>
                    <label htmlFor="text">#Text</label>
                <input value={text} onChange={e => setText(e.target.value)} required className="inputForm" type="text" placeholder="Enter Text.."></input> <br />
                    <label htmlFor="amount">#Amount</label>
                    <input value={amount} onChange={e => setAmount(e.target.value)} className="inputForm" type="number" required placeholder="Enter Amount.."></input> <br /><br />
                </div>
                <button className="formButton">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
