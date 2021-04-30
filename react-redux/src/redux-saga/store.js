import {createStore} from 'redux'
import mySagas from './sagas' 
// import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'   //引入saga
const sagaMiddleware = createSagaMiddleware();   //创建saga中间件
const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySagas);
export default store