import React,{useState,useEffect} from 'react'

export default function Index() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    },[count])

    useEffect(()=>{
        console.log('组件销毁')
    },[])
    return (
        <div>
            <p>you click {count} 次</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}

