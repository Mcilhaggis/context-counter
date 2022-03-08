import React, { useContext } from 'react';
import { CounterContext } from '../CountContext';


function ButtonTen() {
    const context = useContext(CounterContext)
    console.log(context)
    return (
        <>
            <button>Add 100</button>

        </>
    )
}

export default ButtonTen;