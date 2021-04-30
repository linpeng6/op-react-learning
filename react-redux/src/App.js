import React, { Component } from 'react'
import {change_input_action} from './redux/actions';
import { ADD_ITEM ,DETELE_ITEM} from './redux/actionTypes'
export default class App extends Component {

    
    constructor(props) {
        super(props);

        const {store} = props;

        //获取store中的state
        this.state = store.getState();
        
        store.subscribe(()=>{ 
            this.setState(store.getState());
        })
    }

    changeValue(e) {
        //封装action
        this.props.store.dispatch(change_input_action(e.target.value))
    }

    add() {
        this.props.store.dispatch({ type: ADD_ITEM })
    }

    deleteItem(index) {

        this.props.store.dispatch({ type: DETELE_ITEM, data: index })
    }
    render() {
        return (
            <div>
                <input onChange={e => { this.changeValue(e) }} value={this.state.inputValue}/>
                <button onClick={() => { this.add() }}>增加</button>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            <li key={index} onClick={() => { this.deleteItem(index) }}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
