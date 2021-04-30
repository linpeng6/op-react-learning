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

注意：
store必须唯一
reducer不能更改state,返回一个新的state
reducer必须是纯函数

actiontypes,actions封装
UI和业务逻辑分离,降低耦合



* 4.redux-thunk 异步中间件
npm i redux-thunk -D 
```javascript
import thunk from 'redux-thunk'
const store = createStore(reducer,applyMiddleware(thunk))

//componentDidMount
const action = getDataList()
this.props.store.dispatch(action)


export const getDataList = () => {
	return dispatch =>{
		//异步代码
		setTimeout(()=>{
			dispatch({type:'getList',data:['1']})
		},1000)
	}
}
```

* 5.redux-saga 中间件
npm i redux-saga -S
```javascript
import createSagaMiddleware from 'redux-saga'   //引入saga
const sagaMiddleware = createSagaMiddleware();   //创建saga中间件
sagaMiddleware.run(mySagas);
```

```javascript
//sagas.js

//业务逻辑编写
import { takeEvery,put} from 'redux-sage/effects';

//generator
function* mySaga(){
    yield takeEvery('getSagaList', getList)
}

function* getList(){
    const res = yield axios.get('/api/xxx');
    const action = {type:'getList',data:res.data}
    yield put(action)
}

export default mySaga
```
## redux调试插件
react-dev-tools
```javascript
 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```