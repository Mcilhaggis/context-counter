import React, { useContext } from 'react';
import { CountContext } from '../CountContext';

export default function BtnOne() {
    const context = useContext(CountContext)
    return (
        <>
            <button onClick={() => context.countDispatch({ type: 'increase1' })}>Add 1</button>
        </>
    )
}
