import { createSelector } from 'reselect'

const getTodos = state => state.todos
const getFilter = state => state.filter
const getQueryFilter = state => state.queryFilter
export const getUser = state => state.user

export const getFilteredTodos = createSelector(
    [getTodos, getFilter, getQueryFilter],
    (todos, filter, queryFilter) => {
        if(todos === null) {
            return null
        }

        return todos.filter(todo => {
            if(filter === 'ALL') {
                return true
            }
    
            if(todo.is_completed) {
                return filter === 'COMPLETED'
            }
            else {
                return filter === 'PENDING'
            }
        }).filter(todo => {
            return new RegExp(queryFilter, 'i').test(todo.text)
        })
    }
)
