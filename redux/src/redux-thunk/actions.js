import axios from 'axios'


//异步action返回一个函数
export const getDataList = ()=>{
    return dispatch=>{
        axios.get('/api/xxx').then(res=>{
            //dosomething
            const action = {type:'getList',data:res.data}
            dispatch(action)
        })
    }
}