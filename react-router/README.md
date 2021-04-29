## react-router
https://reactrouter.com/web/guides/quick-start


npm install react-router-dom

## 1.简介
React Router 是一个基于 React 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与URL间的同步。

## 2.基础

* 基础配置
```javascript
<Router>
    <h1>App</h1>
    <ul>
        <li><Link to="/">Index</Link></li>
        <li><Link to="/mine">Mine</Link></li>
    </ul>
    <Route path="/" exact component={Index} />
    <Route path="/mine" component={Mine} />
</Router>
```

* 动态路由
设置：
```javascript
<Route path="/mine/:id" component={Mine} />
```
接收：
this.props.match

* 重定向
```javascript
<Redirect to="/home" />

this.props.history.push("/home")
```

* 嵌套路由
* 后台动态获取路由