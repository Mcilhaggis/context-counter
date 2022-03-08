import React, { useContext } from 'react';
import { CounterContext } from '../CountContext';


function BtnOne() {
    const context = useContext(CounterContext)
    console.log(context)
    return (
        <>
            <button>Add 1</button>

        </>
    )
}

export default BtnOne;