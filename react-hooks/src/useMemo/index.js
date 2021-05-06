import React, { useState , useMemo } from 'react'

export default function Index() {
    const [count, setCount] = useState(0)
    return (
        <div>
            {count}
            <button onClick={() => { setCount(count+1) }}>change</button>
            <Child />
        </div>
    )
}

function Child() {
    //父组件更新状态，子组件重复渲染
    const getNowTime = ()=>{
        return new Date().getTime();  
    }

    //使用useMemo避免重复渲染
    const func = useMemo(()=>{
        return getNowTime()
    },[])
    return (
        <div>{func}</div>
    )
}