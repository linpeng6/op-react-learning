import React, { Component } from 'react'

//UI和逻辑分离，减少耦合
//使用函数组件
const AppView = props => {
    const {inputValue ,list ,changeValue ,add,deleteItem} =  props;
    return (
        <div>
            <input onChange={e => { changeValue(e) }} value={inputValue}/>
            <button onClick={add}>增加</button>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={index} onClick={() => { deleteItem(index) }}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default AppView;