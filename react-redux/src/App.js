import React, { Component } from 'react'

export default class App extends Component {
   constructor(props) {
       super(props);
       //获取store中的state
       this.state=props.store.getState();
   }

   changeValue(e){
       
        const action = {
            type:'changeInput',
            data:e.target.value
        }
        this.props.store.dispatch(action)
   }
   
   add(){
        this.props.store.dispatch({type:'addItem'})
   }

   deleteItem(index){
       
        this.props.store.dispatch({type:'deleteItem',data:index})
   }
    render() {
        return (
            <div>
                <input onChange={(e)=>{this.changeValue(e)}} />
                <button onClick={()=>{this.add()}}>增加</button>
                <ul>
                    {this.state.list.map((item,index)=>{ 
                        return (
                            <li key={index} onClick={()=>{this.deleteItem(index)}}>
                            {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
