import React, { useContext } from 'react';
import { CounterContext } from './CountContext';
// Import buttons
import ButtonOne from './js/buttons/ButtonOne'
import ButttonTen from './js/buttons/ButttonTen'
import ButtonOneH from './js/buttons/ButtonOneH'


function Counter() {
    const context = useContext(CounterContext)

    return (
        <>
            <p>Counter:</p>
            <p>{context.count}</p>

            <ButtonOne />
            <ButttonTen />
            <ButtonOneH />
        </>
    )
}

export default Counter;