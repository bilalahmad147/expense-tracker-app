import React, { useContext, useState } from 'react'
import CounterContext from "./CounterContext"

function CountContext() {

    let initValue = useContext(CounterContext);
    let [Count, setCount] = useState(initValue)

    return (
        <div>
            <h1>this counter is using Context </h1>
            <h1>Counter : {Count}</h1>
            <button onClick={()=> setCount(++Count)}>Plus</button>
            <button onClick={()=> setCount(--Count)}>Minus</button>
            <button onClick={()=> setCount(initValue)}>Reset</button>
        </div>
    )
}

export default CountContext
