import React, { useContext } from 'react';
import { CountContext } from '../CountContext';

export default function BtnOneH() {
    const context = useContext(CountContext)
    return (
        <>
            <button  className="btn" onClick={() => context.countDispatch({ type: 'increase100' })}>Add 100</button>
        </>
    )
}

