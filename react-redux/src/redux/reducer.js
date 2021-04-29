const defaultState = {
    //初始化state
    inputValue : '',
    list:[
        'this is first data',
        'this is second data',
        'this is third data',
    ],
}

export default (state = defaultState,action)=>{
    switch(action.type){
       case 'changeInput':
           return {
               ...state,
               inputValue:action.data
           }
        case 'addItem':
            let newState = {...state}
            //console.log(newState)
            newState.list.push(state.inputValue)
            return {
               ...newState,   
               inputValue:''
            }

        case 'deleteItem':
            let deleteState = {...state}
            deleteState.list.splice(action.data,1)
            return {
                ...deleteState
            }
        default:
            return state
    }
}