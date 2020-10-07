import React from 'react'

function AddTransaction() {
    return (
        <div>
            <h1>Add transaction</h1>
            <form>
                <input type="text" placeholder="Enter Text.."></input> <br />
                <input type="number" placeholder="Enter Amount.."></input>
                <button>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
