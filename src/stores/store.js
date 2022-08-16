import { createStore, combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'

const reducer = combineReducers({ todos, filter })

export default createStore(reducer)
