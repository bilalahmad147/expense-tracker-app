import React,{ createContext, useReducer } from 'react';
import TransReducer from './TransReducer';

let initTransactions = [
    { name: 'bilal', amount: 10 },
    { name: 'zubi', amount: 100 },
    { name: 'talha', amount: 1000 },
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