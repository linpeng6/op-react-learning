## react-redux

react-redux这是一个react生态中常用组件，它可以简化redux流程

## 1.安装
npm i react-redux -S


## 2.Provider
<Provider>是一个提供器，只要使用了这个组件，组件里边的其它所有组件都可以使用store
```javascript
import { Provider } from 'react-redux'
 <Provider store={store}>
        <TodoList />
  </Provider>
```

## 3.connect
```javascript
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return {
        inputValue: state.inputValue
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        changeInput(e){
            //change_input_cation ({type:'changeInput',data:e.target.value})
            dispatch(change_input_action(e.target.value))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
```

connect两个参数,mapStateToProps,mapDispatchToProps
第一个参数是映射store中的state到props中
第二个参数是用于建立组件跟store.dispatch的映射关系
