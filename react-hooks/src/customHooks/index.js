import React, { useState, useEffect, useCallback } from 'react'

function useWindowSize(){
    const [size,setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight,
    })

    const onResize = useCallback(()=>{
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight,
        })
    },[])

    useEffect(()=>{
        window.addEventListener('resize',onResize);
        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    },[])

    return size
}


export default function Index(){
    const size = useWindowSize()
    return (
        <div>
            width:{size.width}
            height:{size.height}
        </div>
    )
}