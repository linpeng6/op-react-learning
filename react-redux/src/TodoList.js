import React, { Component } from 'react'
import { connect } from 'react-redux';
import { change_input_action, add_item } from './redux/actions';
class TodoList extends Component {

    render() {
        const { inputValue , changeInput , addToList} = this.props;
        return (
            <div>
                <div>
                    <input value={inputValue} onChange={changeInput} />
                    <button onClick={addToList}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeInput(e) {
            dispatch(change_input_action(e.target.value))
        },
        addToList() {
            dispatch(add_item())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);