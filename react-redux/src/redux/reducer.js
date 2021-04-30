import { CHANGE_INPUT , ADD_ITEM ,DETELE_ITEM} from './actionTypes'
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
       case CHANGE_INPUT:
           return {
               ...state,
               inputValue:action.data
           }
        case ADD_ITEM:
            let newState = {...state}
            //console.log(newState)
            newState.list.push(state.inputValue)
            return {
               ...newState,   
               inputValue:''
            }

        case DETELE_ITEM:
            let deleteState = {...state}
            deleteState.list.splice(action.data,1)
            return {
                ...deleteState
            }
        default:
            return state
    }
}