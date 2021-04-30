//业务逻辑编写
import { takeEvery,put} from 'redux-sage/effects';

//generator
function* mySaga(){
    yield takeEvery('getSagaList', getList)
}

function* getList(){
    const res = yield axios.get('/api/xxx');
    const action = {type:'getList',data:res.data}
    yield put(action)
}

export default mySaga