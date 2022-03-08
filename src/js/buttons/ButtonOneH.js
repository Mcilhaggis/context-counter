import React, { useContext } from 'react';
import { CounterContext } from '../CountContext';


function BtnOneH() {
    const context = useContext(CounterContext)
    console.log(context)
    return (
        <>
            <button>Add 100</button>

        </>
    )
}

export default BtnOneH;