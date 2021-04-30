import React,{useState} from 'react'

export default function Index() {

    const [count,setCount] = useState(0) //数组解构
    return (
        <div>
            <p>you click {count} 次</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}
