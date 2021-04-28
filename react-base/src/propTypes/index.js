import React, { Component } from 'react';
import PropTypes from 'prop-types';
//类组件
class IndexComp extends Component {
    render() {
        return(
            <SecondComp data={1}></SecondComp>
        )
    }
}

export default IndexComp

class SecondComp extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>{this.props.data}</div>
        )
    }
}

SecondComp.propTypes = {
    data:PropTypes.number
}   

SecondComp.defaultProps = {
    data:1
}