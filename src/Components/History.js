import React, { useContext, useState } from 'react'
import '../App.css'
import TransContext from './TransContext'

function History() {

    let { transaction } = useContext(TransContext);
    let [state,setState] = useState(transaction);
    console.log(state)
    

    const handleClick = (index) => {
        setState(transaction.splice(index,1))
        return transaction
    }

    return (
        <div className="history">
            <h2>History</h2><hr />
            <ul className="list">
                {
                    transaction.map((obj, ind) => {
                        return (
                            <li key={ind}>
                                <span>{obj.name}</span>
                                <span>{obj.amount}$</span>
                                <button onClick={()=>{handleClick(ind)}}>Del</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default History
