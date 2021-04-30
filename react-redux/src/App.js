import React, { Component } from 'react'
import View from './AppView'
import { change_input_action } from './redux/actions';
import { getDataList } from './redux-thunk/actions';
import { ADD_ITEM, DETELE_ITEM } from './redux/actionTypes'
export default class App extends Component {


    constructor(props) {
        super(props);

        const { store } = props;

        //获取store中的state
        this.state = store.getState();

        store.subscribe(() => {
            this.setState(store.getState());
        })
    }

    componentDidMount(){
        // const action = getDataList()
        // this.props.store.dispatch(action)
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
            <View
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeValue={(e) => { this.changeValue(e) }}
                add={() => { this.add() }}
                deleteItem={(index) => this.deleteItem(index)}
            />
        )
    }
}
