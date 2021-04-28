import React, { Component } from 'react'

export default class LifeCycle extends Component {

    //初始化
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        console.log('---------组件挂载完成')
    }
    
    shouldComponentUpdate(){
        console.log('---------组件更新之前')
    }

    componentDidUpdate(){
        console.log('---------组件更新之后')
    }

    componentWillUnmount(){
        console.log('---------组件卸载')
    }
    render() {
        console.log('---------组件render')
        return (
            <div>
                
            </div>
        )
    }
}
