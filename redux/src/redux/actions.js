import { CHANGE_INPUT , ADD_ITEM ,DETELE_ITEM} from './actionTypes'

export const change_input_action = (value)=>({
    type: CHANGE_INPUT,
    data: value
})
