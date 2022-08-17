import { createSelector } from 'reselect'

const getTodos = state => state.todos
const getFilter = state => state.filter

export const getFilteredTodos = createSelector([getTodos, getFilter], (todos, filter) => todos.filter(todo => {
    if(filter === 'ALL') {
        return true
    }

    if(todo.isCompleted) {
        return filter === 'COMPLETED'
    }
    else {
        return filter === 'PENDING'
    }
}))
