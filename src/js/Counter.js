import React, { useContext } from 'react';
import { CounterContext } from './CountContext';
// Import buttons
import ButtonOne from './buttons/ButtonOne'
import ButtonTen from './buttons/ButtonTen'
import ButtonOneH from './buttons/ButtonOneH'


function Counter() {
    const context = useContext(CounterContext)

    return (
        <>
            <p>Counter:</p>
            <p>{context.count}</p>

            <ButtonOne />
            <ButtonTen />
            <ButtonOneH />
        </>
    )
}

export default Counter;