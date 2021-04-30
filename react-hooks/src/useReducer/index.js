import React, { useReducer } from 'react'

export default function Index() {

    const initState = { count: 0 }
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                return { count: state.count + 1 }
            case 'sub':
                return { count: state.count - 1 }
            default:
                return { count: state.count }
        }
    }, initState)
    return (
        <div>
            <h2>this is {state.count} value</h2>
            <button onClick={() => { dispatch({ type: 'add' }) }} >增加</button>
            <button onClick={() => { dispatch({ type: 'sub' }) }} >删除</button>
        </div>
    )
}
