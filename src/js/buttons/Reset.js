import React, { useContext } from 'react';
import { CountContext } from '../CountContext';

export default function ButtonTen() {
    const context = useContext(CountContext)
    return (
        <>
            <button onClick={() => context.countDispatch({ type: 'reset' })}>Reset</button>
        </>
    )
}