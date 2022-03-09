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
            <div className="counterContainer">
                <h1 className="projectHeader">Count with UseContext and UseReducers</h1>
                <div className="counterContent">
                    <p className="countTally">{context.countState.count}</p>
                    <h2 className="counterTitle">COUNTER</h2>

                    <ButtonOne />
                    <ButtonTen />
                    <ButtonOneH />
                    <Reset />
                </div>
            </div>
        </>
    )
}

export default Counter;