import React, { useContext } from 'react'
import '../App.css'
import TransContext from './TransContext'

function History() {

    let { transaction } = useContext(TransContext);

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
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default History
