import { createStore, combineReducers } from 'redux'
import todosSlice from '../slices/todosSlice'
import filterSlice from '../slices/filterSlice'
import queryFilterSlice from '../slices/querySlice'

const reducer = combineReducers({
    todos: todosSlice.reducer,
    filter: filterSlice.reducer,
    queryFilter: queryFilterSlice.reducer,
})

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
