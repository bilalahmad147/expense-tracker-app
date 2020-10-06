import React, { useReducer } from 'react'
import CounterReducer from './CounterReducer'

function CountReducer() {

    const initValue = 0;
    const [state, dispatch] = useReducer(CounterReducer,initValue);

    return (
        <div>
            <h1>Counter : {state}</h1>
            <button onClick={()=>{dispatch("INCREMENT")}}>Plus</button>
            <button onClick={()=>{dispatch("DECREMENT")}}>Minus</button>
            <button onClick={()=>{dispatch("RESET")}}>Reset</button>
        </div>
    )
}

export default CountReducer
