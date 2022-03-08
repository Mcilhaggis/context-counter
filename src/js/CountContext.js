import React, { createContext } from 'react';

export const CounterContext = createContext();

export default function ProviderComponent(props) {

    const countInfo = {
        count: 0,
    }

    return (
        <>
            <CounterContext.Provider value={countInfo}>
                {props.children}
            </CounterContext.Provider>
        </>
    )
}

