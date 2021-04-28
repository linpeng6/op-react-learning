import React, { Component } from 'react';

class Father extends Component {
    
    render() {
        return(
            <Son money={10000}/>
        )
    }
}

export default Father

class Son extends Component {
    render() {
        return(
            <div>{this.props.money}</div>
        )
    }
}