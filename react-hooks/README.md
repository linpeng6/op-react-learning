## react-hooks

## 1.Hook
Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。

## 2.Hook使用规则

* 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
* 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（自定义Hook）

## 3.useState

useState 就是一个 Hook
通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。
更新函数类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。
```javascript
export default function Index() {
    const [count,setCount] = useState(0)  //数组解构
    return (
        <div>
            <p>you click {count} 次</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}
```

## 4.useEffect
数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用

```javascript
const [count,setCount] = useState(0)
useEffect(()=>{
    document.title = `You clicked ${count} times`
},[count])
return (
    <div>
        <p>you click {count} 次</p>
        <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
)
```

如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它
```javascript
useEffect(()=>{
    return ()=>{
        console.log('组件销毁')
    }
},[])
```

useEffect的第二个参数为一个数组,useEffect会依赖该数组中的值重新执行


## 5.useContext
主要解决父子组件传值问题
```javascript
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
    //接收一个 context对象并返回该 context 的当前值
    const count = useContext(CountContext)
    return (
        <div>{count}</div>
    )
}

```

## 6.useReducer
useState的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的dispatch方法

```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

```javascript
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
```


## 7.useMemo
useMemo用于解决子组件重复渲染带来的性能问题。代替class组件的ComponentWillUpdate。
```javascript
const func = useMemo(()=>{
        return getNowTime()
},[])
```

## 8.useRef
1. 获取DOM元素
2. 保存变量
```javascript
const inputEl = useRef(null);
const onButtonClick = ()=>{
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
}
return (
    <div>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
    </div>
)
```

## 9.自定义hooks函数
```javascript
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
```