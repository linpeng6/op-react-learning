import {applyMiddleware, createStore ,compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// const store = createStore(reducer,applyMiddleware(thunk))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer,enhancer)
export default store