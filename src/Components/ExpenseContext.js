import React, { createContext,useReducer } from 'react'

const initialState = {
    transaction : [
        {id:1, text:"flower", amount: 100},
        {id:1, text:"camera", amount: -100},
        {id:1, text:"books", amount: -200},
        {id:1, text:"money", amount: 500},
    ]
};

export const ExpenseContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    return <ExpenseContext.Provider value={{
        transaction : state.transaction
    }}>
        {children}
    </ExpenseContext.Provider>
}
