import { createStore, combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
import queryFilter from './queryFilter'

const reducer = combineReducers({ todos, filter, queryFilter })

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
