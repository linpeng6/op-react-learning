## redux

## 1.介绍
Redux是一个用来管理管理数据状态和UI状态的JavaScript应用工具。随着JavaScript单页应用（SPA）开发日趋复杂，JavaScript需要管理比任何时候都要多的state（状态），Redux就是降低管理难度的。（Redux支持React，Angular、jQuery甚至纯JavaScript）


什么时候该使用redux?
https://redux.js.org/faq/general#when-should-i-use-redux


## 2.安装
npm install redux --save

## 3.用法

* 1. 创建store
   store.js

```javascript
import {createStore} from 'redux'
import reducer from './reducer'
//传入reducer
const store = createStore(reducer)

export default store
```

* 2.创建reducer
```javascript
const defaultState = {
    //初始化state
    inputValut:'',
    list:[]
}
export default (state = defaultState,action)=>{
    return state
}
```

* 3.更新状态
```javascript
const data = e.target.value;
store.dispatch({type:'changeInput',data})
```

```javascript
export default (state = defaultState,action)=>{
    switch(action.type){
       case 'changeInput':
           return {
               ...state,
               inputValue:action.data
           }
    }
}
```
reducer不能更改state,返回一个新的state

## redux调试插件
react-dev-tools
```javascript
 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```