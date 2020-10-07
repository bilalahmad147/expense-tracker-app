import React, { useState } from 'react'
import '../App.css'

function AddTransaction() {

    const [text,setText] = useState("");
    const [amount,setAmount] = useState();

    console.log(text,amount)

    return (
        <div>
            <h2>Add transaction</h2>
            <form onSubmit={}>
                <label>
                    #Text
                <input value={text} onChange={(e) => setText(e.target.value)} required className="inputForm" type="text" placeholder="Enter Text.."></input> <br />
                </label>
                <label>
                    #Amount
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} className="inputForm" type="number" required placeholder="Enter Amount.."></input> <br /><br />
                </label>
               
                <button className="formButton">Add TransaputFormction</button>
            </form>
        </div>
    )
}

export default AddTransaction
