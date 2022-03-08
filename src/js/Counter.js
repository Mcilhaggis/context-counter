import React, { useContext } from 'react';
import { CountContext } from './CountContext';

// Import buttons
import ButtonOne from './buttons/ButtonOne'
import ButtonTen from './buttons/ButtonTen'
import ButtonOneH from './buttons/ButtonOneH'
import Reset from './buttons/Reset'

function Counter() {
    const context = useContext(CountContext)
    return (
        <>
            <p>Counter:</p>
            <p>{context.countState.count}</p>

            <ButtonOne />
            <ButtonTen />
            <ButtonOneH /> 
            <Reset />
        </>
    )
}

export default Counter;