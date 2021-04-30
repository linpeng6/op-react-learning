import React, { useState, createContext, useContext } from 'react'
const CountContext = createContext()

export default function Index() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }} >click</button>
            <CountContext.Provider value={count}>
                <Child />
            </CountContext.Provider>
        </div>
    )
}

function Child() {
    const count = useContext(CountContext)
    return (
        <div>{count}</div>
    )
}
