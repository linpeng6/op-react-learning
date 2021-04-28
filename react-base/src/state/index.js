import React, { Component } from 'react';

class StateComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'op',
            age: 24,
        }
    }
    render() {
        const { name, age } = this.state;
        return (
            <div>
                <div>{name}{age}</div>
                <button onClick={()=>{this.setState({age:18})}}>change state</button>
            </div>
        )
    }
}

export default StateComp