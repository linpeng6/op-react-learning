## React学习

## 1. HelloWorld
```javascript
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
)
```

## 2. jsx
```javascript
const element = <h1>Hello, world!</h1>;

//不用jsx
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

## 3.component

1. class组件
```javascript
class Comp extends Component {
    render(){}
}
```
2. 函数组件
```javascript
function FuncComp(){ return() }
```

## 4.props
组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。

## 5.state
```javascript
this.state = {
    name: 'op',
    age: 24,
}
//更新state
this.setState({age:18});
```
注意：
1. 不要直接修改 State , 使用setState
this.state.comment = 'Hello'; //wrong
2. state的更新可能是异步的
出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
可以让 setState() 接收一个函数而不是一个对象
3. State 的更新会被合并
当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state。

单向数据流：
组件可以选择把它的 state 作为 props 向下传递到它的子组件中
不能修改props

## 6.事件处理
```javascript
<button onClick={()=>{this.setState({age:18})}}>事件处理</button>
```
React 中不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault
e.preventDefault();

class 的方法默认不会绑定 this.

ref
```javascript
 <input 
    value={this.state.inputValue} 
    onChange={(e) => { this.changeValue(e) }}
    ref = {input=>this.input = input}
 />
```

## 7.生命周期
组件生命周期图谱
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
分为三个阶段：
1. Mounting 挂载
当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

- constructor()

- static getDerivedStateFromProps()
https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops

getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用
getDerivedStateFromProps 的存在只有一个目的：让组件在 props 变化时更新 state

- render()

- componentDidMount()
componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。

2. Updating 更新
当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

- static getDerivedStateFromProps() 同上

- shouldComponentUpdate()
https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate

- render()

- getSnapshotBeforeUpdate() 不常用

- componentDidUpdate()
componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。

3. Unmounting 卸载
componentWillUnmount() 会在组件卸载及销毁之前直接调用。

## PropTypes
import PropTypes from 'prop-types'
https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html
## 调试工具
react-developer-tools

## 踩坑总结

1. 样式使用className
2. 循环列表需要添加key值
3. dangerouslySetInnerHTML={__html:item}可以解析html
4. label与input绑定,激活input,使用htmlFor