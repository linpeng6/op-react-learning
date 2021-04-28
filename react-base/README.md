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
