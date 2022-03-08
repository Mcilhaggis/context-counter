import React, { useContext } from 'react';
import { CountContext } from '../CountContext';


function BtnOneH() {
    const context = useContext(CountContext)

    return (
        <>
            <button onClick={() => context.countDispatch({ type: 'increase100' })}>Add 100</button>

        </>
    )
}

export default BtnOneH;