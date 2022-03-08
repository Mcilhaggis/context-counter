import React, { useContext } from 'react';
import { CounterContext } from './CountContext';


function Counter() {
    const context = useContext(CounterContext)
    console.log(context)
    return (
        <>
            <button>Add one</button>

        </>
    )
}

export default Counter;