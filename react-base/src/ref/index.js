import React, { Component } from 'react';

class RefComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    changeValue(){
        this.setState({
            // inputValue: e.target.value
            inputValue:this.input.value
        });
    }
    render() {
        return (
            <div>
                <input 
                  value={this.state.inputValue} 
                  onChange={(e) => { this.changeValue(e) }}
                  ref = {input=>this.input = input}
                />
                <div>{this.state.inputValue}</div>
            </div>
        )
    }
}

export default RefComp