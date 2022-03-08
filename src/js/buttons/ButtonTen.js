import React, { useContext } from 'react';
import { CountContext } from '../CountContext';


function ButtonTen() {
    const context = useContext(CountContext)

    return (
        <>
            <button onClick={() => context.countDispatch({ type: 'increase10' })}>Add 10</button>

        </>
    )
}

export default ButtonTen;