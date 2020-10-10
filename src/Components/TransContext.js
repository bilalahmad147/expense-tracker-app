import React,{ createContext, useReducer } from 'react';
import TransReducer from './TransReducer';

let initTransactions = [
    {name:"books", amount: 50},
    {name:"camera", amount: 100},
    {name:"salary", amount: 200},
]


const TransContext = createContext(initTransactions)

export default TransContext;

export const TransProvider = ({children}) => {
    let [state,dispatch] = useReducer(TransReducer,initTransactions);

    function addTransaction(transObj){
        dispatch({
            type : "ADD_TRANS",
            payload: {
                name : transObj.name,
                amount: transObj.amount
            }
        })
    }
    return(
        <TransContext.Provider value={{
            transaction : state,
            addTransaction,
        }}>
            {children}
        </TransContext.Provider>
    )
}