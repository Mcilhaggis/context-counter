import React, { useContext } from 'react';
import { CountContext } from '../CountContext';

export default function ButtonTen() {
    const context = useContext(CountContext)
    return (
        <>
            <button  className="btn" onClick={() => context.countDispatch({ type: 'increase10' })}>Add 10</button>
        </>
    )
}

